import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
            username : '',
            user : [],
        }
    }

    Validation () {
        if (!this.state.name > 0) {
            this.setState({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }



    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/customer')
            .then((response) => {
                this.setState({user:response.data})
            })
    }

    onUserDataSubmit = (e) =>{
        e.preventDefault();
        if (this.Validation()){
            axios.post('http://127.0.0.1:8000/api/customer', {
                name : this.state.name,
                username : this.state.username,
                email : this.state.email,
                password : this.state.password,
            })
        }
    }

    render() {

        const handelUserDelete = (id) => {
            axios.delete('http://127.0.0.1:8000/api/customer/'+id)
        }

        const data = this.state.user;
        let num = 1;
        const alldata = data.map((data,idx)=>{
            return[
                <tr>
                    <th scope="row" key={idx}>{num}<span style={{display:'none'}}>{num++}</span></th>
                    <td>{data.name}</td>
                    <td>{data.slug}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td><a className="btn btn-sm btn-danger" onClick={() => handelUserDelete(data.id)}>Delete</a></td>
                </tr>
            ]
        })

        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">User</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/">
                                            <i className="bx bx-home-alt"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All User</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#userShowModal">Add User</button>
                            </div>
                        </div>
                    </div>

                    <h6 className="mb-0 text-uppercase">User list</h6>
                    <hr/>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered" >
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {alldata}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>


                    {/**/}
                    <div className="modal fade show" id="userShowModal" tabIndex="-1"
                         style={{display: 'none'}} aria-modal="true" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <form onSubmit={this.onUserDataSubmit}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add User</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-2">
                                            <label className="form-label">Name</label>
                                            <input
                                                name="name"
                                                onChange={(event)=>{this.setState({name:event.target.value})}}
                                                className="form-control" type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <strong>{this.state.nameError}</strong>

                                        <div className="mb-2">
                                            <label className="form-label">User Name</label>
                                            <input
                                                name="username"
                                                onChange={(event)=>{this.setState({username:event.target.value})}}
                                                className="form-control" type="text" placeholder="Enter Your Username" />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Email</label>
                                            <input
                                                name="email"
                                                onChange={(event)=>{this.setState({email:event.target.value})}}
                                                className="form-control" type="text" placeholder="Enter Your Email" />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Password</label>
                                            <input
                                                name="password"
                                                onChange={(event)=>{this.setState({password:event.target.value})}}
                                                className="form-control" type="text" placeholder="Enter Your Password" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/**/}
                </div>
            </div>
        );
    }
}

export default User;