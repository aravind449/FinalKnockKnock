import './App.css';
// import React from "react";
import React, { useState, useMemo } from "react";
import LandingToolbar from "../src/Components/Toolbar/LandingToolbar";
import Landing from "../src/Components/Landing/Landing";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomerRegistration from "./Components/Regstration/CustomerRegistration";
import TechnicianRegistration from "./Components/Regstration/TechnicianRegistration";
import TechnicianLanding from "./Components/Landing/TechnicianLanding";
import Home from "./Components/Home/Home";
import Otp from './Components/Login/Otp';
import ForgotPassword from './Components/Login/ForgotPassword';
import FOtp from './Components/Login/FOtp';
import ChangePassword from './Components/Login/ChangePassword';
import TechPage from "./Components/Landing/TechPage";
import Book from "./Components/Landing/Book";
import Profile from "./Components/Landing/Profile";

import Comments from "./Components/Landing/Comments";
import Techwall from './Components/TechnicianProfile/Techwall'

import { UserContext } from './UserContext';
import Admin from './Components/Admin/admin'
import Allusers from './Components/Admin/Allusers.jsx';
import Alltech from './Components/Admin/Alltech';
import Booked from './Components/Admin/Booked';



const useStyles = makeStyles((theme) => ({
    root : {
        flexDirection: "column",
        height: "100vh"
    },
}));

function App() {

    const [user, setUser] = useState(39);
    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
    const classes = useStyles();
    return (
        <div className="App">
            <Grid container className={classes.root}>
                <BrowserRouter>
                <LandingToolbar />
                    <Switch>
                        <UserContext.Provider value={providerValue}>
                        <Route exact path={"/"}>
                            <Landing />
                        </Route>
                        <Route path={"/technician-login"}>
                            <TechnicianLanding />
                        </Route>
                        <Route path={"/customer-registration"}>
                            <CustomerRegistration />
                        </Route>
                        <Route path={"/change-password/:id"} component={ChangePassword}>
                            
                        </Route>
                        <Route path={"/tech-page/:id"} component={TechPage}>
                           
                        </Route>
                        <Route path={"/book/:id"} component={Book}>
                           
                           </Route>
                        <Route path={"/technician-registration"}>
                            <TechnicianRegistration />
                        </Route>
                        <Route path={"/forgot-password"}>
                            <ForgotPassword />
                        </Route>
                        <Route path={"/comments/:id"} component={Comments}>
                          
                        </Route>
                        <Route path={"/home"}>
                            <Home />
                        </Route>
                        <Route path={"/otp"}>
                            <Otp />
                        </Route>

                       
                        <Route path={"/fotp/:id"} component={FOtp}>
                          
                        </Route>
                            {/* Edited part */}
                            <Route path={"/techwall"}>
                                <Techwall />
                            </Route>
                            <Route path={"/admin"}>
                                <Admin />
                            </Route>
                            <Route path={"/profile"}>
                                <Profile />
                            </Route>
                            <Route path={"/allusers"}>
                                <Allusers />
                            </Route>
                            <Route path={"/alltech"}>
                                <Alltech />
                            </Route>
                           
                            <Route path={"/book"}>
                                <Booked />
                            </Route>
                        </UserContext.Provider>
                    </Switch>
                </BrowserRouter>
            </Grid>
      </div>
    );
}

export default App;
