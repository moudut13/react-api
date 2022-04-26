import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Tags extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            errorName : '',
            tag : [],
        }
    }
    Validation () {
        if (!this.state.name > 0) {
            this.setState({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }


    onTagsSubmit = (e) =>{
        e.preventDefault();
        if (this.Validation()){
            axios.post('http://127.0.0.1:8000/api/tags', {
                name: this.state.name,
            })
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/tags')
            .then((response) => {
                this.setState({tag:response.data})
            })
    }

    render() {

        const handelTagsDelete = (id) => {
            axios.delete('http://127.0.0.1:8000/api/tags/'+id)
        }
        const data = this.state.tag;
        let num = 1;
        const allTags = data.map((data,idx)=>{
            return[
                <tr>
                    <th scope="row" key={idx}>{num}<span style={{display:'none'}}>{num++}</span></th>
                    <td>{data.name}</td>
                    <td>{data.slug}</td>
                    <td><a className="btn btn-sm btn-danger" onClick={() => handelTagsDelete(data.id)}>Delete</a></td>
                </tr>
            ]
        })


        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Tags</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All Tags</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#tagsFormShowModal">Add Tags</button>
                            </div>
                        </div>
                    </div>

                    <h6 className="mb-0 text-uppercase">Tags List</h6>
                    <hr/>
                    <div className="card">
                        <div className="card-body">
                            <table className="table mb-0 table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {allTags}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="modal fade" id="tagsFormShowModal" tabIndex="-1"
                         style={{display: 'none'}} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <form onSubmit={this.onTagsSubmit}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add Tags</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <label className="form-label">Tag Name</label>
                                            <input name="name"
                                                   onChange={(event)=>{this.setState({name:event.target.value})}} className="form-control" type="text" placeholder="Tag" />
                                        </div>
                                        <strong>{this.state.nameError}</strong>
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