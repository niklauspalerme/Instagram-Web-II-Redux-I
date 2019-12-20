import  Main from '../Main'
import {connect} from 'react-redux' //Te permite conectar componentes
import {bindActionCreators} from 'redux' //Se necesita para bindear las actions
import {removePost,addPost} from '../redux/actions' //Importa todas las funciones de actions.js
import {withRouter} from 'react-router'

//Acceder a las variables iniciales del state
//1) Genero una funcion que me capture las variables iniciales del estado
//En este caso es mapStateProps que recibe como parametro el const post como state
//2)Luego esa variable de inicializacion la guardo en un objeto llamado posts
//de esa forma podremos acceder a ella en main.js -> this.props.posts
//3)Luego para que pueda acceder a esta variable la tengo que conectar al redux 
//Mandandole la funcion ele connect
//const App =connect(mapStateToProps)(Main))
function mapStateToProps (state) {

    return {
        posts: state
    }

}

//Bindeo todas las funciones de actions 
//1) Genero una funcion donde me pueda bindear cada una de las actions de actions.js
//2) Puedo traer todos los actions o puedo importarlo de 1 a 1 
//3) Dentro de la funcion capturo un dispatch -> donde estan las actions/funciones
//4) Retorno un bindeo con la accion que quiero bindear + el dispatch de todo
//quedaria asi bindActionCreators({removePost,addPost},dispatch)
function mapDispatchToProps (dispatch){
    return bindActionCreators({removePost,addPost},dispatch)
}

//Conectar a la store y al componente superior
//1)Para que todo la informacion fluya se debe conectar al store
// connect (funciones quen queres conectar)(en cual componente lo vas a conectar)
//2) Una vez hecho eso ya puedes acceder a la informacion y a las acciones
//3) Aqui la conexion se wrappea con un withRouter ya que se necesitaba acceder 
// a las variables history 
//4) Se iguala todo a unas const App para que esta sea exportada en index.js
//y luego esta sea wrapeada por el Provider que contiene la informacion del store
const App =withRouter( connect(mapStateToProps, mapDispatchToProps)(Main))
export default App;