import React, { useState,useContext } from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { book } from "../../Utils/Api";
import { useHistory } from "react-router-dom"
import { UserContext } from "../../UserContext";

const useStyles = makeStyles((theme) => ({
    landingContainer: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        width: "40%",
        border: "2px solid #A8A8A8",
        padding: "1em"
    },
    gridItemText: {
        marginBottom: "0.8em",
        display: "flex",
        justifyContent: "space-between"
    },
    gridItemButton: {
        marginBottom: "0.8em",
        display: "flex",
        justifyContent: "center"
    },
    formTextField: {
        float: "left",
        width: "100%",
        display: "flex",
    },
    containerDiv: {
        width: "48%",
    },
    formTitle: {
        marginBottom: "1em",
    },
    textField: {
        width: "100%",
    },
    button: {
        width: "45%",
        backgroundColor: "#2B4257",
        color: "white",
        '&:hover': {
            backgroundColor: "#88A9C3",
            color: "white",
        }
    },
}));

const CustomerRegistration = ({ match },props) => {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);

    
    const [fields, setFields] = useState({
        customerId: user,
        technicianId: match.params.id,
        dateofbook:"",
        stat:"pending",

       
       
    });

    const onChange = (e) => {
        e.preventDefault();
        setFields({...fields, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const searchId = match.params.id;
        console.log(fields);
           
            const status = await book(fields);
            if (status === 200) {
                window.location = "/home";
            } else {
                alert("Some problem occurred in booking. Refresh the page and try again.")
            }
        
    };

    return (
        <div className={classes.landingContainer}>
            <Grid container className={classes.loginContainer}>
                <Grid item xs={12} className={classes.formTitle}>
                    <Typography variant={"h5"}>
                        Booking
                    </Typography>
                </Grid>
                <form onSubmit={onSubmit}>
                <Grid item xs={ 12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Date
                        </Typography>
                        <TextField
                            id="dateofbook"
                            name="dateofbook"
                            placeholder="MM/DD/YYYY"
                            variant="outlined"
                            size="small"
                            className={classes.textField}
                            onChange={onChange}
                        />
                    </div>
                  
               
                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.button}
                    >
                        Book Now
                    </Button>
                </Grid>
                </form>
            </Grid>
        </div>
    );
};

export default CustomerRegistration;