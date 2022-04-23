import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Permission extends Component{
    constructor(props) {
        super(props);
        this.state = {
            permission: [],
            name : '',
            nameError : '',
        }

    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/permission')
            .then((response) => {
               this.setState({permission:response.data})
            })
    }

    Validation () {
        if (!this.state.name > 0) {
            this.setState({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }
    onPermissionSubmit = (e) =>{
        e.preventDefault();
        if (this.Validation()){
            axios.post('http://127.0.0.1:8000/api/permission', {
                name: this.state.name,
            }).then(function (response) {
                    /*console.log(response);*/
            })
        }
    }

    render() {
        const handelPermissionDelete = (id) => {
            axios.delete('http://127.0.0.1:8000/api/permission/'+id)
        }
        const data = this.state.permission;
        let num = 1;
        const alldata = data.map((data,idx)=>{
            return[
                <tr>
                    <th scope="row" key={idx}>{num}<span style={{display:'none'}}>{num++}</span></th>
                    <td>{data.name}</td>
                    <td>{data.slug}</td>
                    <td><a className="btn btn-sm btn-danger" onClick={() => handelPermissionDelete(data.id)}>Delete</a></td>
                </tr>
            ]
        })

        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Permission</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All Permission</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#permissionformmodal">Add Permission</button>
                            </div>
                        </div>
                    </div>

                    <h6 className="mb-0 text-uppercase">Permission List</h6>
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
                                {alldata}
                                </tbody>
                            </table>
                        </div>
                    </div>

                        <div className="modal fade" id="permissionformmodal" tabIndex="-1"
                             style={{display: 'none'}} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <form onSubmit={this.onPermissionSubmit}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Add Permission</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div>
                                                <label className="form-label">Permission Name</label>
                                                <input name="name" onChange={(event)=>{this.setState({name:event.target.value})}} className="form-control" type="text" placeholder="Permission" />
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