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
                                <Route to = "/" exact component = {Dashboard}/>
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
