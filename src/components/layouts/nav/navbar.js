import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class navbar extends Component {
    render() {
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className = "nav-link">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default navbar;
