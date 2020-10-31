import React, { Component } from 'react'
import {Link} from 'react-router-dom';

// For getting data from the cloud firestore
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect, isLoaded,  isEmpty} from 'react-redux-firebase';
export class clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalOwed: null
        }
    }

    getTotalBalance = () =>{
        let total  = 0;
        const {clients} = this.props;
        clients.map(client => total +=  parseInt(client.balance));
        return total;
    }

    render() {
        const {clients}  = this.props;

        if(!isLoaded(clients)){
            return (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if(isEmpty(clients)){
            return (
                <div className="jumbotron">
                    <h5>There is nothing to show here.</h5>
                    <p>Click the green button to add a new client.</p>
                </div>
            );
        }

        if(clients.length !== 0){
            return(
                <div className="clients">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>
                                <i className = "fas fa-users"></i> Clients
                            </h3>      
                        </div>
                        <div className="col-md-6">
                            <div className="text-right mt-1">
                                <h5 className = "text-secondary">Total: <span className="text-primary">${this.getTotalBalance()}</span> </h5>
                                
                                {/* {this.getTotalBalance() > 0 ? <h5 className = "text-secondary">Total: <span className="text-primary">${this.getTotalBalance()}</span> </h5> : <h5>Total: <span className="text-success">${this.getTotalBalance()}</span> </h5>} */}
                                
                            </div>
                        </div>
                    </div>


                    <table className="table table-striped mt-3">
                        <thead className = "thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>

                            {clients.map((client) =>{
                                return (
                                    <tr key = {client.id}>
                                        <td>{client.firstName} {client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>${ parseFloat(client.balance).toFixed(2) }</td>

                                        <td>
                                            <Link to = {`/client/${client.id}`} className = "btn btn-secondary btn-sm">
                                            <i className="fas fa-arrow-right"></i>
                                                {' '}Details
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
        else{
            return(
                <div className="d-flex justify-content-start mt-5 ml-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

    }
}

export default compose(
    firestoreConnect(() => ['clients']),
    connect((state) => ({
        clients: state.firestore.ordered.clients
    }))
)(clients);
