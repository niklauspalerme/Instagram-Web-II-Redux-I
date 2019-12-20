import React, { Component, Fragment } from 'react';

class AddPhoto extends Component {
  constructor(props) {
    super(props);

    this.HandleSubmit=this.HandleSubmit.bind(this);
  }

  HandleSubmit(event){
    event.preventDefault();
    let image= event.target.image.value;
    let description=event.target.description.value;

    const post ={
      id:Number(new Date()),
      description,
      imageLink:image
    }

    
    if(description && image){

      this.props.addPost(post)
      this.props.onHistory.push('/')

    }

  }

  render (){
    return (
      <Fragment>
          <div className="form">
            <form onSubmit={this.HandleSubmit}>
              <input type="text" placeholder='Link' name='image'/>
              <input type='text' placeholder='Description' name='description'/>
              <button>Post</button>
            </form>
          </div>
      </Fragment>
    );
  }

}

export default  AddPhoto;