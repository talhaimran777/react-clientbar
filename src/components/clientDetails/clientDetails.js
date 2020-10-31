import React, { Component } from 'react';
 import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

import BackAndAction from '../layouts/backAndAction/backAndAction';

export class clientDetails extends Component {

    state = {
        showInput: false,
        updatedBalance: ''
    }

    editHandler = () =>{
        this.setState(state => {
            return {
                showInput: !state.showInput
            }
        });
    }


    onSubmitHandler = (e) =>{
        e.preventDefault();

        const {firestore} = this.props;
        const {id} = this.props.client;
        const {updatedBalance} = this.state;

        firestore.update({collection: 'clients', doc: id}, {balance: parseFloat(updatedBalance)});

        this.setState(state => ({showInput: !state.showInput}));
    }

    onChangeHandler = (e) => this.setState({[e.target.name]: e.target.value});

    render() {

        const {client} = this.props;
        const {updatedBalance} = this.state;
        const {history} = this.props;
        if(!isLoaded(client)) {
            return(
                <div>
                    <BackAndAction/>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="client-details">
                <BackAndAction client = {client} history = {history}/>
                <hr/>
                <div className="card">
                    <div className="card-body">
                        <h3 className = "card-header">{client.firstName} {client.lastName}</h3>
 

                        <div className="card-body row"> 

                            <div className="col-md-6">
                                <h5 className="card-title">
                                    Client ID: 
                                    {" "}
                                    <span className = "text-secondary ml-1">{client.id}</span>
                                    
                                </h5>
                            </div>

                            <div className="col-md-6 text-md-right">
                                <h5 className="card-title">
                                    Balance: 
                                    {" "}

                                    {
                                    
                                    client.balance > 0 ? (
                                        <span className = "text-danger">${client.balance}</span>
                         
                                    ): (<span className = "text-success">${client.balance}</span>)
                                    
                                    }

                                    <i onClick = {this.editHandler} style = {{cursor: 'pointer'}} className="fas fa-edit ml-2 text-primary"></i>
                                    
                                </h5>
                            </div>
                        </div>


                        {
                            this.state.showInput ?  <div className="row">
                            <div className="col text-md-right mr-2">

                                <form onSubmit = {this.onSubmitHandler}>
                                    <input className = "mr-3" 
                                        type="text"
                                        name = "updatedBalance"
                                        placeholder = "Enter updated balance"
                                        value = {updatedBalance}
                                        onChange = {this.onChangeHandler}
                                    />
                                    
                                    <input type = "submit" value = "Update" className = "btn btn-outline-primary btn-sm mb-1"/>
                                </form>
                            </div>
                        </div>:null
                        }

                        <div className=" card card-body">
                            <p > <strong>Email:</strong>  <span className = "ml-1">{client.email}</span> </p> 
                            
                            <p> <strong>Phone:</strong> <span className = "ml-1">{client.phone}</span> </p> 
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    firestoreConnect(props => [
        {collection: 'clients', storeAs: 'client', doc: props.match.params.id}
    ]),
    connect( ({firestore: {ordered}}) => ({
        client: ordered.client && ordered.client[0]
    }))
)(clientDetails);
