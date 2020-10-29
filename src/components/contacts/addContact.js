import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'react-uuid';
import FormGroup from '../layouts/FormGroup';


class addContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {this.setState({[e.target.name]: e.target.value})};

    onHandleSubmit = (dispatch,e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        let newContact = {
            id: uuid(),
            name, email, phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        this.setState({
            name: '',
            email: '',
            phone: ''
        });

        // After adding contact to the state redirect to the home page
        this.props.history.push('/');
    }


    render(){

        const {name, email, phone} = this.state;

        return (
            <Consumer>
                {value => {

                    const {dispatch} = value;
                    return(
                        <div className = "card mb-3">
                            <div className="card-header bg-danger">
                                <h4 className = "text-center text-light text-uppercase">Add Contact</h4>
                            </div>

                            <div className="card-body">
                                <form onSubmit={this.onHandleSubmit.bind(this, dispatch)}>

                                    <FormGroup desc = 'Enter Name' name = 'name' value = {name} placeholder = 'Enter your name...' ON_CHANGE={this.onChange}/>

                                    <FormGroup desc = 'Enter Email' name = 'email' value = {email} placeholder = 'Enter your email...' ON_CHANGE={this.onChange}/>


                                    <FormGroup desc = 'Enter Phone' name = 'phone' value = {phone} placeholder = 'Enter your phone...' ON_CHANGE={this.onChange}/>

                                    <input type = "submit" value = "Add Contact" className="btn btn-outline-success btn-block"/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default addContact;
