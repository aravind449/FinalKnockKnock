import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getTechnicianCategories, getBookingDetailsForTechnition } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import zIndex from "@material-ui/core/styles/zIndex";
import { UserContext } from "../../UserContext";
const useStyles = makeStyles((theme) => ({

    divElement:{
        top: "50%",
        left: "500%",
        marginTop:"-50px",
marginLeft: "50",
width: "100px",
height: "100px",
},
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

function admin() {
    //const classes = useStyles();
    //const [technicianCategories, setTechnicianCategories] = useState();
    //const [bookings, setBookings] = useState();

    //changes here===================================================================================
    //const { user, setUser } = useContext(UserContext);



    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant={"h3"}>
                        Admin Panel
                    </Typography>
                    <div >
                    <br/>
                    <br/>
                        <table class="table" align="center">
                            <tr height="100%">
                                <td height="100%" width="100%" valign="middle" align="center">
                                <Typography variant={"h5"}>
                                        <tr ><a class="btn-lg btn-primary btn-block" href="/allusers">Fetch All Users</a></tr>
<br></br>
                                        <tr><a class="btn-lg btn-success btn-block" href="/alltech">Fetch All Technitions</a></tr>
                               <br></br> 
                                      
                                       <tr> <a class="btn-lg btn-danger btn-block" href="/book">Fetch booked services</a></tr>
                                    </Typography>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Grid>
               
                        
                    


                {/* {bookings && bookings.map((book, index) => (
                    <Typography display={"inline"} key={index}>
                        {book.BookingID}{book.CustomerID}{book.Dateofbook}{book.stat}
                    </Typography>
                ))} */}
            </Grid>
        </div>
    )
}

export default admin