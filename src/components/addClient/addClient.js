import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Firestore connect
import {firestoreConnect} from 'react-redux-firebase';

export class addClient extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onChange = (e) => {this.setState({[e.target.name]: e.target.value})};
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.setState((state) =>{
            return {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                balance: '' 
            }
        });
        const newClient = this.state;

        if(newClient.balance === ''){
            newClient.balance = 0;
        }

        const {firestore, history} = this.props;
        firestore.add({collection: 'clients'}, newClient);

        // Redirecting to the dashboard
        history.push('/');
    }


    render() {

        const {firstName, lastName, email, phone, balance} = this.state;
        return (
            <div className = "add-client">

                <div className="row mb-3">
                    <div className="col-md-12">
                        <Link to = "/" className = "btn btn-outline-primary btn-block btn-sm">Go to dashboard</Link>
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">Ente First Name</label>
                            <input type="text"
                                    onChange = {this.onChange}
                                    name = "firstName"
                                    value = {firstName}
                                    placeholder = "Enter first name..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Ente last Name</label>
                            <input type="text"
                                    onChange = {this.onChange}
                                    name = "lastName"
                                    value = {lastName}
                                    placeholder = "Enter last name..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Enter Email</label>
                            <input type="text"
                                    onChange = {this.onChange}
                                    name = "email"
                                    value = {email}
                                    placeholder = "Enter email..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Ente Phone No</label>
                            <input type="text"
                                    onChange = {this.onChange}
                                    name = "phone"
                                    value = {phone}
                                    placeholder = "Enter phone..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Enter Balance Amount</label>
                            <input type="text"
                                    onChange = {this.onChange}
                                    name = "balance"
                                    value = {balance}
                                    placeholder = "Enter balance..."
                                    className="form-control"
                            />
                        </div>

                        <input type = "submit" value = "Submit"className="btn btn-outline-primary btn-block"/>                        
                    </form>
                </div>
            </div>
        )
    }
}

export default firestoreConnect()(addClient);
