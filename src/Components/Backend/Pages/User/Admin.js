import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


export default class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            admin : [],
            name : '',
            role : '',
            email : '',
            password : '',
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/admin')
            .then((response) => {
                this.setState({admin:response.data})
            })
    }

    onAdminSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/admin', {
            name: this.state.name,
            role : this.state.role,
            email : this.state.email,
            password : this.state.password,
        }).then(function (response) {
            /*console.log(response);*/
        })

    }

    render() {

        const data = this.state.admin;
        const allData = data.map((data,idx)=>{

            return[
                <tr>
                    <td>{data.name}</td>
                    <td>{data.slug}</td>
                    <td>{data.role_id}</td>
                    <td>{data.email}</td>
                    <td>Photo</td>
                    <td>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                            />
                        </div>
                        </td>
                    <td id={data.id}><a href="www.google.com" className="btn btn-sm btn-danger">Delete</a></td>
                </tr>

            ]
        })
        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Admin</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/">
                                            <i className="bx bx-home-alt"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All Admin</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#adminformmodal">Add Admin</button>
                            </div>
                        </div>
                    </div>

                    <h6 className="mb-0 text-uppercase">Admin list</h6>
                    <hr/>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered" >
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Role</th>
                                        <th>Email</th>
                                        <th>Photo</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {allData}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Role</th>
                                        <th>Email</th>
                                        <th>Photo</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>



                    <div className="modal fade" id="userformmodal" tabIndex="-1"
                         style={{display: 'none'}} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <form>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add User</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">Contrary to popular belief, Lorem Ipsum is not simply
                                        random text. It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock, a Latin professor at
                                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                        words, consectetur.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="modal fade" id="adminformmodal" >
                    <div className="modal-dialog modal-dialog-centered">
                        <form onSubmit={this.onAdminSubmit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Admin</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-2">
                                        <label className="form-label">Name</label>
                                        <input
                                            name="name"
                                            onChange={(event)=>{this.setState({name:event.target.value})}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Your Name" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Role</label>
                                        <input
                                            name="role"
                                            onChange={(event)=>{this.setState({role:event.target.value})}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Your Role" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Email</label>
                                        <input
                                            name="email"
                                            onChange={(event)=>{this.setState({email:event.target.value})}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Your Email" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Password</label>
                                        <input
                                            autoComplete="current-password"
                                            name="password"
                                            onChange={(event)=>{this.setState({password:event.target.value})}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Your Password" />

                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">Add Me</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}