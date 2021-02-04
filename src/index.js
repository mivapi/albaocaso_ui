import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignInSide from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  Redirect
} from "react-router-dom";
import Detalles from './Detalles/Detalles';
import Ejemplo from './Detalles/Ejemplo';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/socio/inicio" component={SignInSide} exact={true} />
                <Route path="/socio/ejemplo/:id_param"  component={Ejemplo} />
                <Route path="/socio/detalle/:id" exact={true} component={Ejemplo} />
                <Route exact path="/socio" render={() => <Redirect to="/socio/inicio" />} />
            </Switch>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
