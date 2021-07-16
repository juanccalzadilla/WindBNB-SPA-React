import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";
import { StayScreen } from '../components/StayScreen';
import { StaysList } from '../components/StaysList';
export const AppRoutes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/stay/:id" component={StayScreen}/>
            <Route exact path="/" component={StaysList}/>
            <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
