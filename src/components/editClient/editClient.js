import React, { Component } from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom'
export class editClient extends Component {
    constructor(props){
        super(props);

        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.balanceInput = React.createRef();
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const {firestore, history} = this.props;
        const {client} = this.props;
        const {id} = client;

        console.log(client);

        const updatedClient = {
            firstName: this.firstNameInput.current.value,
            lastName: this.lastNameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            balance: this.balanceInput.current.value
        }
        if(updatedClient){
            (updatedClient.balance === '' ? updatedClient.balance = 0 : updatedClient.balance = updatedClient.balance);
        }

        firestore.update({collection: 'clients', doc: id}, updatedClient)
        .then(history.push('/'));
    }
    render() {
        const {client} = this.props;

        if(client){
            const {firstName, lastName, email, phone, balance} = client;

            return (
                <div className = "edit-client col-sm-12 col-md-10 col-lg-6 mx-auto">

                <div className="row mb-3">
                    <div className="col-md-12">
                        <Link to = "/" className = "btn btn-outline-primary btn-block btn-sm">Go to dashboard</Link>
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit = {this.submitHandler}>

                        <div className="form-group">
                            <label htmlFor="name">Edit First Name</label>
                            <input type="text"
                                    ref = {this.firstNameInput}
                                    name = "firstName"
                                    defaultValue = {firstName}
                                    placeholder = "Edit first name..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Edit last Name</label>
                            <input type="text"
                                    ref = {this.lastNameInput}
                                    name = "lastName"
                                    defaultValue = {lastName}
                                    placeholder = "Edit last name..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Edit Email</label>
                            <input type="text"
                                    ref = {this.emailInput}
                                    name = "email"
                                    defaultValue = {email}
                                    placeholder = "Edit email..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Edit Phone No</label>
                            <input type="text"
                                    ref = {this.phoneInput}
                                    name = "phone"
                                    defaultValue = {phone}
                                    placeholder = "Edit phone..."
                                    className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Edit Balance Amount</label>
                            <input type="text"
                                    ref = {this.balanceInput}
                                    name = "balance"
                                    defaultValue = {balance}
                                    placeholder = "Edit balance..."
                                    className="form-control"
                            />
                        </div>

                        <input type = "submit" value = "Submit"className="btn btn-outline-primary btn-block"/>                        
                    </form>
                </div>
            </div>
            );
        }
        else{
            return null;
        }
    }
}

export default compose(
    firestoreConnect(props => [
        {collection: 'clients', storeAs: 'client', doc: props.match.params.id}
    ]),

    connect(state =>({client: state.firestore.ordered.client && state.firestore.ordered.client[0]}))
)(editClient);
