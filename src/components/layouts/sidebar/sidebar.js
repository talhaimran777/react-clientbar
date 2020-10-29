import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class sidebar extends Component {
    render() {
        return (
            <div className = "sidebar">
                <Link to = "/client/add" className = "btn btn-success btn-block">
                <i class="fas fa-plus"></i> New
                </Link>
            </div>
        )
    }
}

export default sidebar
