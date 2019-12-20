import React, { Component, Fragment } from 'react';
import './style/stylesheet.css';
import PhotoWall from './components/PhotoWall.jsx';
import {BrowserRouter, Route, Switch,Link } from "react-router-dom";
import AddPhoto from './components/AddPhoto';
import Title from './components/Title'

class Main extends Component {
 constructor() {
   super(); 
   }


 render() {

  //Ver los props de post
  console.log(`Estas en Main: ${this.props}`)

  console.log(this.props.removePost)

   return (

    <Switch>
     
      <Route 
        exact 
        path='/' 
        render={()=>(
          <Fragment>
            <Title/>
            <PhotoWall {...this.props}/> {/*Usamo el spread operator para pasar los props de manera individual */}
          </Fragment>  )                                   
      }/>

      <Route 
        path='/AddPhoto' 
        render={({history})=>(
          <Fragment>
            <Title/>
            <AddPhoto {...this.props} onHistory={history}/>
          </Fragment>
      )}/>

    </Switch>
     
   );
 }
}
export default Main;

