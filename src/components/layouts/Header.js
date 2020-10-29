import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-md navbar-dark bg-danger py-0 mb-3">
                <div className="container">
                    <Link to = '/' className = "navbar-brand"> 
                        <h3>Contact Manager</h3>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <ul className = "navbar-nav ml-auto">
                            <li className = "nav-item mr-3">
                                <Link to = '/' className = "nav-link"> 
                                    <h5><i className="fas fa-home"></i> Home</h5>
                                </Link>
                            </li>
                            <li className = "nav-item mr-3">
                                <Link to = '/add-contact' className = "nav-link"> 
                                    <h5><i className="fas fa-plus"></i> Add Contact</h5>
                                </Link>
                            </li>
                            <li className = "nav-item mr-3">
                                <Link to = '/about-page' className = "nav-link"> 
                                    <h5><i className="fas fa-question"></i> About Page</h5>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
