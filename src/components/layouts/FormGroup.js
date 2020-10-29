import React, { Component } from 'react';

export class FormGroup extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="name">{this.props.desc}</label>
                <input type ="text"
                    name = {this.props.name}
                    onChange={this.props.ON_CHANGE}
                    value = {this.props.value}
                    placeholder = {this.props.placeholder}
                    className="form-control form-control-lg"
                />
            </div>
        )
    }
}

export default FormGroup;
