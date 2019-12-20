import React, {Fragment } from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom';
//import './App.css'; //Aca estas importando el CSS que quieras agregar para poner estilos

function PhotoWall(props){


  return (
    <Fragment>
        <Link className='addIcon' to='/AddPhoto'></Link>
        <button >
        </button>
        <div className='photoGrid'>
            {props.posts
              .sort((x,y)=> y.id-x.id)
              .map((post,index) => <Photo key={index} post={post} {...props} index={index} />)}
        </div>
  
    </Fragment>
  );

}

export default PhotoWall;