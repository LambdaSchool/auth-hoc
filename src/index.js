import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/signin';
import Users from './components/users';
import SignOut from './components/signout';
import SignUp from './components/signup';
import RequireAuth from './components/HOC/RequireAuth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/* Action creators (i.e., the actions we wrote in actions/index.js) are an ideal place to write 
your application logic, and writing that logic often means having to deal with asynchronicity. 
When we make a request for some data from a web server, it takes time to receive a response. 
We need to be able to work with action creators that can wait for a result before dispatching an 
action. Redux-thunk is middleware that we can add to our store. It allows us to build powerful 
action creators called thunks. Thunks are higher order functions that give you control over when 
and how often the actions are dispatched.*/
import ReduxThunk from 'redux-thunk';  
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/users" component={RequireAuth(Users)} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
