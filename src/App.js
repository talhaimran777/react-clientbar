import React from 'react';
import './App.css';

// Let's import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Requiring in react-router-dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Requiring in components
import Header from './components/layouts/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import AboutPage from './components/pages/AboutPage';
import NotFound from './components/pages/NotFound';

// Requiring in privider
import {Provider} from './Context';

function App() {
  return (

    <Provider>
      <div className="App">

        <Router>
          <Header/>
          <div className="container">

            <Switch>

              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/add-contact" component={AddContact}></Route>

              <Route exact path="/about-page" component={AboutPage}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
