// Dashboard is simple component that includes client and the sidebar
import React, { Component } from 'react'

// components
import Clients from '../clients/clients';
import Sidebar from '../layouts/sidebar/sidebar';

export class dashboard extends Component {
    render() {
        return (
            <div className = "dashboard">
                <div className="row">
                    <div className="col-md-10">
                        <Clients/>
                    </div>
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        )
    }
}

export default dashboard
