import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Provider
import {Provider} from 'react-redux';
import {store, rrfProps} from './store';

// From react-redux-firebase
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

// Components
import Nav from './components/layouts/nav/navbar';
import Dashboard from './components/dashboard/dashboard';
import AddClient from './components/addClient/addClient';
import ClientDetails from './components/clientDetails/clientDetails';
import EditClient from './components/editClient/editClient';
import ErrorPage from './components/404page/404page';
import Login from './components/login/login';

export class app extends Component {
    render() {
        return (
            // Let's surround the app with the Router component 
            // <div className = "app">
            //     <Router>
            //         <Nav/>
            //     </Router>
            // </div>

            <Provider store = {store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Router>
                        <div className="app">
                            <Nav/>
                            <div className="container">
                            <Switch>
                                <Route exact path = "/login"  component = {Login}/>
                                <Route exact path = "/"  component = {Dashboard}/>
                                <Route exact path = "/dashboard" component = {Dashboard}/>

                                <Route exact path = "/client/add" component = {AddClient}/>

                                <Route exact path = "/client/edit/:id" component = {EditClient}/>


                                <Route exact path = "/client/:id" component = {ClientDetails}/>

                                <Route path = "/" component = {ErrorPage}/>

                            </Switch>
                            </div>
                        </div>
                    </Router>
                </ReactReduxFirebaseProvider>
            </Provider>
        )
    }
}

export default app;
