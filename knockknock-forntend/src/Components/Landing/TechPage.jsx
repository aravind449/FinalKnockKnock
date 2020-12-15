import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getTechnicians } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Button } from 'react-bootstrap';
import * as bootstrap from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:"0.8em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
   
    techniciansContainer: {
        width: "75%",
        height: "25%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    technicianCategoriesText: {
        paddingTop: "0.8em",
        width: "100%"
    },
}));

const SearchCategory = ({ match },props) => {

    const classes = useStyles();
    const [technicians, setTechnicians] = useState();
   
    
    useEffect( () => {

        getTech();
        
    },[]);

    const getTech = async () => {
        const searchId = {id : match.params.id};
        const technicians = await getTechnicians(searchId);
        setTechnicians(technicians);
    };

    const render=(technician,index)=>{
        return(
            <tr key={index}>
        <td>{technician.FirstName}</td>
        <td> 
             <Link  to={'/comments/'+technician.TechnicianId} className={classes.title}>
                           
                            Details
            </Link>
            </td>
            <td>
            <Link  to={'/book/'+technician.TechnicianId} className={classes.title}>
                           
                           Click Here
           </Link>
        </td>
        <td><a class="btn btn-info" href={'http://localhost:3002/chat?name=Customer&room='+technician.TechnicianId}target="_blank">Chat</a></td>
        </tr>
        )
    }

    

    return (
        <>
        
      
        <Grid container className={classes.landingContainer}>
        <Grid item xs={3}>
            </Grid>
        <Grid item xs={6}>
        <bootstrap.Table striped bordered hover>
  <thead class="thead-dark">
    <tr>
   
      <th>Technician</th>
      <th>Reviews</th>
      <th>Book</th>
      <th>Chat</th>
    </tr>
  </thead>
            <tbody>
    {technicians && technicians.map(render)}
                    
            </tbody>
</bootstrap.Table>
<Link  to={'/home/'} className={classes.title}>
                            
                            back to services
                            </Link>
</Grid>
<Grid item xs={3}>
            </Grid>
            </Grid>
          
           
           
           
 
      
    
   

        </>
    );
};

export default SearchCategory;