import React, { Component } from 'react'
import Contact from './Contact';

import {Consumer} from '../../Context';

export class Contacts extends Component {

    render(){
        return(
            <Consumer>
                {/* Here value is a state object global */}
                {value =>{
                    const contacts = value.contacts;

                    return (
                        <div className="contacts">
                            <h1 className = "display-4"> <span className="text-danger">Contact</span> List</h1>
                            {contacts.map((contact) =>{
                                return (
                                    <Contact key = {contact.id} contact = {contact}/>
                                )
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts
