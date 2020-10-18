import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App'
import 'materialize-css/dist/css/materialize.min.css';



const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store} >
       <div >
        <App />
       </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

