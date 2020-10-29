import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class clients extends Component {

    constructor(props){
        super(props);

        this.state = {
            clients:[
                {
                    id: 1,
                    firstName: 'Hamza',
                    lastName: 'Imran',
                    email: 'himran284@gmail.com',
                    balance: 50,
                },
                {
                    id: 2,
                    firstName: 'Mushraf',
                    lastName: 'Mobeen',
                    email: 'mmobeen284@gmail.com',
                    balance: 150,
                }

            ]
        }
    }
    render() {

        if(this.state.clients.length !== 0){
            return(
                <div className="clients">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>
                                <i className = "fas fa-users"></i> Clients
                            </h3>      
                        </div>
                        <div className="col-md-6"></div>
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

                            {this.state.clients.map((client) =>{
                                return (
                                    <tr key = {client.id}>
                                        <td>{client.firstName} {client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>${ parseFloat(client.balance).toFixed(2) }</td>

                                        <td>
                                            <Link to = {`/client/${client.id}`} className = "btn btn-secondary btn-sm">
                                            <i class="fas fa-arrow-right"></i>
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
                <div class="d-flex justify-content-start mt-5 ml-5">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

    }
}

export default clients
