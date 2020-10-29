import React, { Component } from 'react'

const Context = React.createContext();

// Using reducer
const reducer = (state, action) =>{
    switch (action.type){
        case 'DELETE_CONTACT':
            // delete a contact

            return {
                // ...state means existing state
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            // Adding a contact
            return {
                // ...state means existing state
                ...state,

                contacts: [action.payload, ...state.contacts]
            };
        default:
            // return the state
            return state;
    }
}
export class Provider extends Component {

    state = {
        contacts: [
            { id: 1, name: 'John Doe', email: 'jdoe@example.com', phone: '1234567890'},
            { id: 2, name: 'John Cena', email: 'jcena@example.com', phone: '127823648'},
            { id: 3, name: 'Micheal Jackson', email: 'mjack@example.com', phone: '23749872389'}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer =  Context.Consumer;
