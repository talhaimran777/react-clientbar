import React, { Component } from 'react';
 import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

import BackAndAction from '../layouts/backAndAction/backAndAction';

export class clientDetails extends Component {

    state = {
        showInput: false
    }

    editHandler = () =>{
        this.setState(state => {
            return {
                showInput: !state.showInput
            }
        });
    }

    render() {

        const {client} = this.props;
        console.log(client);

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
                <BackAndAction/>
                <hr/>
                <div className="card">
                    <div className="card-body">
                        <h3 className = "card-header">{this.props.client.firstName} {this.props.client.lastName}</h3>
 

                        <div className="card-body row"> 

                            <div className="col-md-6">
                                <h5 className="card-title">
                                    Client ID: 
                                    {" "}
                                    <span className = "text-secondary ml-1">{this.props.client.id}</span>
                                    
                                </h5>
                            </div>

                            <div className="col-md-6 text-md-right">
                                <h5 className="card-title">
                                    Balance: 
                                    {" "}

                                    {
                                    
                                    this.props.client.balance > 0 ? (
                                        <span className = "text-danger">${this.props.client.balance}</span>
                         
                                    ): (<span className = "text-success">${this.props.client.balance}</span>)
                                    
                                    }

                                    <i onClick = {this.editHandler} style = {{cursor: 'pointer'}} className="fas fa-edit ml-2 text-primary"></i>
                                    
                                </h5>
                            </div>
                        </div>


                        {
                            this.state.showInput ?  <div className="row">
                            <div className="col text-right">
                                <input className = "mr-3" type="text"/>
                                <a className = "btn btn-outline-primary btn-sm mb-1">Update</a>
                            </div>
                        </div>:null
                        }

                        <div className=" card card-body">
                            <p > <strong>Email:</strong>  <span className = "ml-1">{this.props.client.email}</span> </p> 
                            
                            <p> <strong>Phone:</strong> <span className = "ml-1">{this.props.client.phone}</span> </p> 
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
