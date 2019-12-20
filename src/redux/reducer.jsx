import posts from '../data/post'

//Aqui genero el reducer que me retorna y realiza una acción
const postReducer = (state = posts ,action) =>{

    console.log(action.index)
    console.log(action.type)
    
    switch(action.type){

        //el ..state individualiza cada elemento del array
        case 'REMOVE_POST': return [...state.slice(0,action.index),...state.slice(action.index+1)]
        
        case 'ADD_POST': return [...state,action.post]

        default: return state
    }

    return state
}

export default postReducer