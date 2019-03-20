import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import firebase from './config/firebase';
import './App.css';
import Dashboard from "./components/Dashboard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            authenticated: false,
            displayName : '',
            email:'',
            uid :'',
            providerData : '',
        };
    };
componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
        user
        ? this.setState(()=>({
                authenticated: true,
                email:user.email,
                uid :user.uid,
                providerData : user.providerData,

            }))
        : this.setState(() => ({
            authenticated:false
        }))
    })
}
    logOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
    return (
        <Router className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>React Firebase TodoApp </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            {this.state.authenticated === false ? <Link className="nav-link disabled" to={'/'}>Dashboard</Link> : <Link className="nav-link" to={'/dashboard'}>Dashboard</Link> }
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li  className="nav-item">
                            {this.state.authenticated === false ? <Link className="nav-link" to={'/register'}>Register</Link> : <Link className="nav-link" to={'/'} ></Link> }
                        </li>
                        <li  className="nav-item">
                            {this.state.authenticated === false ? <Link className="nav-link" to={'/login'}>Login</Link> : <Link onClick={this.logOutUser} className="nav-link" to={'/'} >LogOut</Link> }
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
