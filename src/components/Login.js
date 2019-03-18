import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="container py-4">
                <form>
                    <div className="card">
                        <div className="card-header"> <b> <i className="fas fa-user-lock"></i> Authentication </b> </div>
                        <div className="card-body">

                            <div className="form-group">
                                <label> Email</label>
                                <input type="email" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label> Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
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
