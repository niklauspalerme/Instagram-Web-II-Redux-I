//Todas las acciones de nuestra App estarán acá

//1)remove post

export function removePost(index){
    
    return{
        type:'REMOVE_POST',
        index
    }
}

export function addPost (post){

    return{
        type: 'ADD_POST',
        post /// post:post
    }
}