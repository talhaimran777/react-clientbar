import React, { Component } from 'react';

export class editClient extends Component {
    render() {
        console.log(this.props);
        return (
            <div className = "edit-client">
                <h3>Editing contact</h3>
            </div>
        )
    }
}

export default editClient;
