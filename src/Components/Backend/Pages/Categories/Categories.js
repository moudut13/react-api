import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import CategoryFirst from "./CategoryFirst";
export default class Categories extends Component{

    constructor(props) {
        super(props);
        this.state = {
            categoryFirst : [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/category')
            .then((response) => {
                this.setState({categoryFirst:response.data})
            })
    }

    render() {
        const data = this.state.categoryFirst;


        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Categories</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All Category</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#categoryFormShowModal">Add Category</button>
                            </div>
                        </div>
                    </div>

                    <h5 className="mb-0 text-uppercase">Category List</h5>
                    <br/>
                    <CategoryFirst data={data}/>

                    <div className="modal fade" id="categoryFormShowModal" tabIndex="-1"
                         style={{display: 'none'}} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <form >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add Category</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/*<div>
                                            <label className="form-label">Tag Name</label>
                                            <input name="name"
                                                   onChange={(event)=>{this.setState({name:event.target.value})}} className="form-control" type="text" placeholder="Tag" />
                                        </div>
                                        <strong>{this.state.nameError}</strong>*/}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}