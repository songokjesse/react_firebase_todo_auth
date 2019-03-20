import React, { Component } from 'react';
import firebase from "../config/firebase";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passsword: '',
            error: null
        }
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
    }
    handleInputEmail = (e)=>{
        this.setState({
            email: e.target.value
        });
    };
    handleInputPassword = (e)=>{
        this.setState({
            password: e.target.value
        });
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email,password)
            .then((user)=>{
                console.log(user.uid);
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({error: error.message });
            });
    };

    render() {
        return (
            <div className="container py-4">

                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header"> <b> <i className="fas fa-user-lock"></i> Authentication </b> </div>
                        <div className="card-body">

                            {this.state.error == null ? <div></div> : <div className='alert alert-danger'>{this.state.error}</div> }

                            <div className="form-group">
                                <label> Email</label>
                                <input type="email" className="form-control" value={this.state.email || ''} onChange={this.handleInputEmail} placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label> Password</label>
                                <input type="password" className="form-control" value={this.state.password || ''} onChange={this.handleInputPassword} placeholder="Password" />
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <button className="btn btn-primary btn-sm"><i className="fas fa-lock-open"></i> Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
