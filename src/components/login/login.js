import React, { Component } from 'react';
import {firebaseConnect} from 'react-redux-firebase';
export class login extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {firebase} = this.props;
        const {email, password} = this.state;
        firebase.login({email, password});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    render() {
        console.log(this.props);
        return (
            <div className = "col-md-8 col-lg-5 mx-auto mt-5">
                <div className="card">
                    <div className="card-header text-center">
                        <h2 className = "text-primary"> <i className="fas fa-lock"></i> Login</h2>
                    </div>

                    <div className="card-body">

                        <form onSubmit = {this.onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Enter Email</label>
                                <input className="form-control" 
                                    type="text" 
                                    placeholder="Enter Email..."
                                    name = "email"
                                    value = {this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Enter Password</label>
                                <input className="form-control" 
                                    type="text" 
                                    placeholder="Enter Password..."
                                    name = "password"
                                    value = {this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>

                            <input type="submit" value = "login"className="btn btn-primary btn-block"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default firebaseConnect()(login);
