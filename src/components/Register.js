import React, { Component } from 'react';
import firebase from '../config/firebase'
class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            error: null,
        };

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
            .createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                this.props.history.push('/');
             })
            .catch((error) => {
                this.setState({error: error });
            });
    };
    render() {
        return (
            <div className="container py-4">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header"> <b> <i className="fas fa-users-cog"> </i> Account Creation </b> </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label> Email</label>
                                <input type="email" className="form-control"  value={this.state.email} onChange={this.handleInputEmail} placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label> Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.handleInputPassword} placeholder="Username" />
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <button  type="submit" className="btn btn-primary btn-sm"><i className="fas fa-sign-in-alt"></i>  Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
