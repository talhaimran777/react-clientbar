import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// Components
import Nav from './components/layouts/nav/navbar';
import Dashboard from './components/dashboard/dashboard';

export class app extends Component {
    render() {
        return (
            // Let's surround the app with the Router component 
            // <div className = "app">
            //     <Router>
            //         <Nav/>
            //     </Router>
            // </div>


            <Router>
                <div className="app">
                    <Nav/>
                </div>

                <Switch>
                    <Route to exact = "/" component = {Dashboard}/>
                </Switch>
            </Router>
        )
    }
}

export default app;
