import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
export class navbar extends Component {

    state = {
        isAuthenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        const {auth} = props;
        if(auth.uid){
            return {
                isAuthenticated: true
            }
        }
        else{
            return {
                isAuthenticated: false
            }
        }
    }
    logoutHandler = () => {
        const {firebase, history} = this.props;
        firebase.logout();
        history.push('/login');
    }
    render() {

        const {auth} = this.props;
        const {email} = auth;
        const {isAuthenticated} = this.state;
        return (
            <nav className = "navbar navbar-expand-md navbar-dark bg-primary p-0 mb-3">
                <div className="container px-5">

                    <Link to = "/" className = "navbar-brand">Client Bar</Link>

                    <button className="navbar-toggler"
                            type = "button"
                            data-toggle = "collapse"
                            data-target = "#thisNav"
                    >

                        <span className="navbar-toggler-icon"
                                style = {{fontSize: '15px'}}
                        ></span>
                    </button>


                    
                    <div className="collapse navbar-collapse" id="thisNav">
                        
                        {isAuthenticated ?  <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to = "/"className = "nav-link">Dashboard</Link>
                            </li>
                        </ul> : null}

                        {isAuthenticated ?   <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className = "nav-link mr-2">{email}</span>
                            </li>
                            <li className="nav-item">
                                <Link onClick={this.logoutHandler} to = "/"className = "nav-link">Logout</Link>
                            </li>
                        </ul> : null}
                    </div>
                </div>
            </nav>
        )
    }
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({auth: state.firebase.auth})),
    withRouter
)(navbar);