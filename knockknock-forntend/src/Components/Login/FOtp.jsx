import React, { useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"
import { fotp } from "../../Utils/Api";

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1em",
    },
    gridItemText: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "0.8em",
    },
    container: {
        display: "block",
        width: "65%",
        backgroundColor: "#addfad",
        border: "2px solid #808080",
        padding: "1em"
    },
    divContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
    },
    formTextField: {
        width: "30%",
        display: "flex",
    },
    customerLoginText: {
        margin: "1em 0",
    },
    button: {
        width: "45%",
    },
    input: {
        backgroundColor: "#f5f5f5",
    },
}));




const FOtp = ({ match },props) => {
    const classes = useStyles();
    const [fields, setFields] = useState({
        otp: "",
       
    });

    const onChange = (e) => {
        setFields({...fields, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            
          
            const status = await fotp(fields);
            console.log('status check');
         

            console.log(status);
            if (status === 200) {
              

               
               
                window.location = "/change-password/"+ match.params.id;
            } else {
                console.log(status);
                alert(status);
            }
        } catch (errors) {
            console.log(errors.response.data.errors[0].msg);
            alert(errors.response.data.errors[0].msg);
        }
    };


 


    return (
        <div className={classes.divContainer}>
            <Grid container className={classes.container}>
                <Typography className={classes.customerLoginText}>
                    Forgot Password
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid item xs={12} className={classes.gridItemText}>
                        <Typography className={classes.formTextField}>
                            OTP
                        </Typography>
                        <TextField
                            id="otp"
                            name="otp"
                            placeholder="Enter OTP"
                            variant="outlined"
                            type="number"
                            size="small"
                            onChange={onChange}
                            fullWidth
                            InputProps={{
                                classes: { input: classes.input },
                            }}
                        />
                    </Grid>
                   
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button
                            variant="contained"
                            type="submit"
                            className={classes.button}
                        >
                            submit
                        </Button>
                    </Grid>
                </form>
              
            </Grid>
        </div>
    );
};

export default FOtp;