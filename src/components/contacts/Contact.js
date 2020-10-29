import React, { Component } from 'react';

import {Consumer} from '../../Context';


export class Contact extends Component {

    state = {
        showContact: false
    }

    showContactHandler = () => {
        this.setState({
            showContact: !this.state.showContact
        });
    }

    deleteContactHandler = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }

    render() {

        const {id, name, email, phone} = this.props.contact;
        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return (
                        <div className="card card-body my-3">
                            <h3>{name} 
                                <i className="fas fa-backspace text-danger mr-5" onClick = {this.deleteContactHandler.bind(this, id, dispatch)} style = {{cursor: "pointer", float: "right"}}></i> 
                            
                                <i className="fas fa-chevron-circle-down mr-5 text-success" onClick = {this.showContactHandler} style = {{cursor: "pointer", float: "right"}}></i>
                            </h3>
            
                            {/* Conditionaly reders this contact information */}
            
            
                            {this.state.showContact ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        {email}
                                    </li>
            
                                    <li className="list-group-item">
                                        {phone}
                                    </li>
                                </ul>
                            ) : null }
                        </div>
                    )  
                }}
            </Consumer>             
        )
    }
}

export default Contact
