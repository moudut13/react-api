import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


export default class Role extends Component{

    constructor(props) {
        super(props);
        this.state = {
            role : [],
            permission : [],
            nameError : '',
            perError : '',
            perName : [],
        }
    }

    /* Form Validation*/
    Validation () {
        if (!this.state.name > 0) {
            this.setState({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }
    /* Form Validation*/

    /* Form Submit*/
    onRoleSubmit = (e) =>{
        e.preventDefault();
        if (this.Validation()){
            axios.post('http://127.0.0.1:8000/api/role', {
                name: this.state.name,
                perName: this.state.perName,
            })
                .then(function (response) {
                   /* console.log(response);*/
                })
        }
    }
    /* Form Submit*/


    componentDidMount() {
        /* Show Role index*/
        axios.get('http://127.0.0.1:8000/api/role')
            .then((response) => {
                this.setState({role:response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        /* Show Role index*/

        /* Show Permission in form*/
        axios.get('http://127.0.0.1:8000/api/permission')
            .then((response) => {
                this.setState({permission:response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        /* Show Permission in form*/
    }


    render() {
        console.log(this.state.perName);
        /*Show map role index*/
        const data = this.state.role;
        let num = 1;
        const showRole = data.map((data,idx)=>{
            return[
                <tr>
                    <th scope="row" key={data.id}>{num}<span style={{display:'none'}}>{num++}</span></th>
                    <td>{data.name}</td>
                    <td>{data.slug}</td>
                    <td>{data.permission}</td>
                    <td id={data.id} ><Link to="" className="btn btn-sm btn-danger">Delete</Link></td>
                </tr>
            ]
        });
        /*Show map role index*/

        /*Show permission in form*/
        const perData = this.state.permission;
        const showPer = perData.map((perData,idx)=>{
            return[
                <ul>
                    <li>
                        <input
                            name="perName[]"
                            onClick={(event)=>{this.setState({perName : event.target.value})}}
                            id={perData.id}
                            type="checkbox"
                            value={perData.name} />
                        <label htmlFor={perData.name}>{perData.name}</label>
                    </li>
                </ul>
            ]
        });
        /*Show permission in form*/

        return(
            <div className="page-wrapper">
                <div className="page-content">

                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Role</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">All Role</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                        data-bs-target="#roleformmodal">Add Role</button>
                            </div>
                        </div>
                    </div>

                    <h6 className="mb-0 text-uppercase">Role List</h6>
                    <hr/>
                    <div className="card">
                        <div className="card-body">
                            <table className="table mb-0 table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Permission</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {showRole}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/**/}
                <div className="modal fade" id="roleformmodal" tabIndex="-1"
                     style={{display: 'none'}} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <form onSubmit={this.onRoleSubmit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Permission</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <label className="form-label">Role Name</label>
                                        <input
                                            name="name"
                                            onChange={(event)=>{this.setState({name:event.target.value})}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Role" />
                                    </div>
                                    <strong>{this.state.nameError}</strong><br/><br/>
                                    <div>
                                        <label className="form-label">Permission</label>
                                        {showPer}
                                    </div>
                                    <strong>{this.state.perError}</strong>
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
                {/**/}

            </div>
        );
    }
}