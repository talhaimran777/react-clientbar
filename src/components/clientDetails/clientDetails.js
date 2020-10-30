import React, { Component } from 'react';
 import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

export class clientDetails extends Component {
    render() {

        const {client} = this.props;
        console.log(client);

        if(!isLoaded(client)) {
            return(
                <h5>Still loading ....</h5>
            );
        }

        return (
            <div className="client-details">
                <h2>{client.firstName } {' '} {client.lastName}</h2>
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
