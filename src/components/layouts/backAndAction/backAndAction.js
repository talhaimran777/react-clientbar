import React from 'react';
import {Link} from 'react-router-dom';
 
const editHandler = () =>{
    console.log('Editing a contact!');
}

const deleteHandler = () =>{
    console.log('Deleting a contact!');
}
function backAndAction() {
    return (
        <div className="row mt-4 mb-4">
            <div className="col-6">
                <Link className = "badge badge-primary p-2 mt-1" to = "/"><i className="fas fa-arrow-left"></i> Back to dashboard</Link>
            </div>
            <div className="col-6 text-right">
                <div onClick = {deleteHandler} className="btn btn-sm btn-danger mr-2">Delete</div>
                <div onClick = {editHandler} className="btn btn-sm btn-primary">Edit</div>
            </div>
        </div>
    )
}

export default backAndAction;
