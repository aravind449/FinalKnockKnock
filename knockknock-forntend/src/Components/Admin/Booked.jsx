import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getBookListApi } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


function Booked(props) {
    const [allUs, setAll] = useState();

    useEffect(() => {

        getUnBookList();
    }, []);

    const getUnBookList = async () => {

        const allUs = await getBookListApi();
        setAll(allUs);
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant={"h4"}>
                        User Booking Confirmed
                    </Typography>
                    <div >
                        <br />
                        <br />
                        <table align="center">
                            <tr height="100%">
                                <td height="100%" width="100%" valign="middle" align="center">
                                    <Typography variant={"h5"}>
                                        <table class="table table-bordered">
                                            <tr class="thead-dark">
                                                {/* <th>{user}</th> */}
                                                <th>Booking Id</th>
                                                <th>Customer Id</th>
                                                <th>Technician Id</th>
                                                <th>Date Of Booking</th>
                                                {/* <th>Password</th> */}
                                                <th>Status</th>

                                            </tr>

                                            {allUs && allUs.map((all, index) => (

                                                <tr id={index}>
                                                    <td>{all.BookingID}</td>
                                                    <td>{all.CustomerID}</td>
                                                    <td>{all.TechnicianID}</td>
                                                    {/* <td>{all.Password}</td> */}
                                                    <td>{all.Dateofbook}</td>
                                                    <td>{all.Stat}</td>

                                                    {/* <td><button>Edit</button></td> */}
                                                </tr>

                                            ))}


                                        </table>
                                    </Typography>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Booked