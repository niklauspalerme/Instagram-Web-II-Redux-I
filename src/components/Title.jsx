import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch,Link } from "react-router-dom";

//import './App.css';

function Title (/*props*/){

    return (
        <Fragment>
            <h1><Link to='/'>PhotoWall</Link></h1>          
        </Fragment>
      
    );
  }

export default Title;