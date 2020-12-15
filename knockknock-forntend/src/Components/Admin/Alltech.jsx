import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getAllTechListApi } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


function Allusers(props) {
    const [allTe, setAll] = useState();

    useEffect(() => {

        getAllTechList();
    }, []);

    const getAllTechList = async () => {
        const allTe = await getAllTechListApi();
        setAll(allTe);
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant={"h4"}>
                        Technicians Registered With KnockKnock
                    </Typography>
                    <div >
                        <br />
                        <br />
                        <table align="center">
                            <tr height="100%">
                                <td height="100%" width="100%" valign="middle" align="center">
                                    <Typography variant={"h5"}>
                                        <table class="table table-bordered">
                                            <tr>
                                                {/* <th>{user}</th> */}
                                                <th>Customer Id</th>
                                                <th>First Name</th>
                                                <th>Email</th>
                                                {/* <th>Password</th> */}
                                                <th>TechnicianCategoryId</th>
                                                <th>LicenceNo</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                {/* <th>City</th>
                                                <th>Country</th>
                                                <th>Postal Code</th> */}

                                            </tr>

                                            {allTe && allTe.map((all, index) => (

                                                <tr id={index}>
                                                    <td>{all.TechnicianId}</td>
                                                    <td>{all.FirstName}</td>
                                                    <td>{all.Email}</td>
                                                    {/* <td>{all.Password}</td> */}
                                                    <td>{all.TechnicianCategoryId}</td>
                                                    <td>{all.LicenceNo}</td>
                                                    <td>{all.Mobile}</td>
                                                    <td>{all.Address}</td>
                                                    {/* <td>{all.City}</td>
                                                    <td>{all.Country}</td>
                                                    <td>{all.Postalcode}</td> */}
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
export default Allusers