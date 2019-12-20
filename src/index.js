import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/App'

//Creo un store donde voy a consumir y editar data
const store =createStore(rootReducer)


//Genero un provider para que este se accesible en todo los niveles 
//Y le mando como props el store con toda la data a consumir
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

serviceWorker.unregister();



