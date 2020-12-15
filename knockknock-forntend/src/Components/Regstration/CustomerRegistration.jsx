import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { customerRegistration } from "../../Utils/Api";

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
    tablo:{
        color:"red"
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

const CustomerRegistration = (props) => {
    const classes = useStyles();
    const [userIdError,setUserIdError]=useState("")
    const [emailIdError, setEmailIdError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [postalError, setPostalError] = useState("")



    const [fields, setFields] = useState({
        userId: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        //userIdError:"",
    });

    const onChange = (e) => {
        e.preventDefault();
        setFields({...fields, [e.target.name]: e.target.value});
        //user id validation
        if ([e.target.name] =='userId')
        {
            if (e.target.value.length<5)
                setUserIdError("*User Id Length Should Be Atleast Four")
            else
                setUserIdError("")
        }

        //email id validation
        if ([e.target.name] == 'email') {
            if (!e.target.value.includes('@'))
                setEmailIdError("*Invalid Email Id")
            else
                setEmailIdError("")
        }

        //phone number validation
        if ([e.target.name] == 'mobile') {
            if (e.target.value.length < 10 || !e.target.value.match(/^[0-9]+$/)) 
                setPhoneError("*Invalid Phone Number")
            else
                setPhoneError("")
        }

        //postal code validation
        if ([e.target.name] == 'postalCode') {
            if (e.target.value.length < 6 || e.target.value.length > 6)
                setPostalError("*Invalid Postal Code")
            else
                setPostalError("")
        }

    };


    const onSubmit = async (e) => {
        e.preventDefault();
        
        console.log(fields);
        if (fields.password===fields.confirmPassword) {
            const status = await customerRegistration(fields);
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
                        Customer Registration
                    </Typography>
                </Grid>
                <form onSubmit={onSubmit}>
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                                User Id 
                        </Typography>
                        <TextField
                            id="userId"
                            name="userId"
                            placeholder="User Id"
                            variant="outlined"
                            size="small"
                            className={classes.textField}
                                //errorText={userIdError}
                            onChange={onChange}
                               // helperText={userIdError}
                        />
                          
                    </div>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Email Address
                        </Typography>
                        <TextField
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            name="password"
                            placeholder="Password"
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
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Mobile
                        </Typography>
                        <TextField
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Address
                        </Typography>
                        <TextField
                            id="address"
                            name="address"
                            placeholder="Address"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            City
                        </Typography>
                        <TextField
                            id="city"
                            name="city"
                            placeholder="City"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Country
                        </Typography>
                        <TextField
                            id="country"
                            name="country"
                            placeholder="Country"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.gridItemText}>
                    <div className={classes.containerDiv}>
                        <Typography className={classes.formTextField}>
                            Postal Code
                        </Typography>
                        <TextField
                            id="postalCode"
                            name="postalCode"
                            placeholder="Postal Code"
                            variant="outlined"
                            size="small"
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
                        Register Now
                    </Button>
                </Grid>
                </form>
            </Grid>
            <Grid item xs={3} className={classes.gridItemButton}>
                <table className={classes.tablo}>
                <tr>{userIdError}</tr>
                <tr> {emailIdError}</tr>
                <tr> {phoneError}</tr>
                <tr> {postalError}</tr>
                </table>
            </Grid>
        </div>
    );
};

export default CustomerRegistration;