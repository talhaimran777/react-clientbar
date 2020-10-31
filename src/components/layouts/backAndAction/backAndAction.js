import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase';

export class backAndAction extends Component {


    deleteHandler = () => {
        const {client, history, firestore} = this.props;
        const {id} = client;

        firestore.delete({collection: 'clients', doc: id})
        .then(history.push('/'));
    }
    render() {
        return (
            <div className="row mt-4 mb-4">
                <div className="col-6">
                    <Link className = "badge badge-primary p-2 mt-1" to = "/"><i className="fas fa-arrow-left"></i> Back to dashboard</Link>
                </div>
                <div className="col-6 text-right">
                    <div onClick = {this.deleteHandler} className="btn btn-sm btn-danger mr-2">Delete</div>
                    <div onClick = {this.editHandler} className="btn btn-sm btn-primary">Edit</div>
                </div>
            </div>
        )
    }
}

export default firestoreConnect()(backAndAction);




// import React, { Component } from 'react';

// 
// import {compose} from 'redux';
// import {connect} from 'react-redux';










