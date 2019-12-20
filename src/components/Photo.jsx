import React, {Fragment } from 'react';
//import './App.css'; //Aca estas importando el CSS que quieras agregar para poner estilos

function Photo (props){

    const {post} =props

    return (
        <Fragment>
           <figure className='figure'>
               <img className='photo' src={post.imageLink} alt={post.description}/>
               <figcaption><p>{post.description}</p></figcaption>
               <div className='button-container'>
                   <button onClick={()=>{props.removePost(props.index)}}>Remove</button>
               </div>
           </figure>
        </Fragment>
      ); 
}

export default Photo;