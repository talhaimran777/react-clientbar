import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, } from 'react-router-dom';


// Components
import Nav from './components/layouts/nav/navbar';
export class app extends Component {
    render() {
        return (
            <div className = "app">
                <Router>
                    <Nav/>
                </Router>
            </div>
        )
    }
}

export default app;
