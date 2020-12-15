import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { changepassword } from "../../Utils/Api";

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

const ChangePassword = ({ match },props) => {
    const classes = useStyles();
    const [fields, setFields] = useState({
        email: match.params.id,
        password: "",
        confirmPassword: "",
        
    });

    const onChange = (e) => {
        e.preventDefault();
        setFields({...fields, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(fields);
        if (fields.password===fields.confirmPassword) {
          //  alert(match.params.id);
            const status = await changepassword(fields);
            if (status === 200) {
                window.location = "/";
            } else {
                alert("Some problem occurred in registration. Refresh the page and try again.")
            }
        } else {
            alert ("Password and confirm Password does not match");
        }
    };

    return (
        <div className={classes.landingContainer}>
            <Grid container className={classes.loginContainer}>
                <Grid item xs={12} className={classes.formTitle}>
                    <Typography variant={"h5"}>
                       Change Password
                    </Typography>
                </Grid>
                <form onSubmit={onSubmit}>
              
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            name="password"
                            placeholder="New Password"
                            variant="outlined"
                            size="small"
                            type="password"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Confirm Password
                        </Typography>
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            variant="outlined"
                            size="small"
                            type="password"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                </Grid>
              
                <Grid item xs={12} className={classes.gridItemButton}>
                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.button}
                    >
                        ChangePassword
                    </Button>
                </Grid>
                </form>
            </Grid>
        </div>
    );
};

export default ChangePassword;