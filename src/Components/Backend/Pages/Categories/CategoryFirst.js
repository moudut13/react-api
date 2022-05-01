import React, {useState,useEffect} from "react";
import axios from "axios";

const CategoryFirst =(props) =>{
    const [inputField , setInputField] = useState({
        name: '',
        icon: '',
        photo: '',
        nameError : ''
    })

    const Validation = () => {
        if (!inputField.name > 0) {
            setInputField({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }


    const onCategoryFirstSubmit = e =>{
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/category', {
                name: inputField.name,
            })
        }

    }



      const handelCategoryDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/category/'+id)
      }

      let num = 1;
      const allFirstCategory = props.data.map((data,idx)=>{
        return[
          <tr>
            <th scope="row" key={idx}>{num}<span style={{display:'none'}}>{num++}</span></th>
            <td>{data.name}</td>
            <td>{data.slug}</td>
            <td>Icon</td>
            <td>Photo</td>
            <td><a className="btn btn-sm btn-danger" onClick={() => handelCategoryDelete(data.id)}>Delete</a></td>
          </tr>
        ]
      })

    return(
        <>
            <div className="d-none d-sm-flex align-items-center mb-3">
                <div className="h5">Category First</div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                data-bs-target="#categoryFirstFormShowModal">Add Category First</button>
                    </div>
                </div>
            </div>
          <hr/>
          <div className="card">
            <div className="card-body">
              <table className="table mb-0 table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Icon</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {allFirstCategory}
                </tbody>
              </table>
            </div>
          </div>


            <div className="modal fade" id="categoryFirstFormShowModal" tabIndex="-1"
                 style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form onSubmit={onCategoryFirstSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add First Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label className="form-label">Name</label>
                                    <input name="name"
                                           onChange={inputsHandler}
                                           value={inputField.name}
                                           className="form-control"
                                           type="text"
                                           placeholder="Category First Name" />
                                </div>
                                <strong>{inputField.nameError}</strong>
                                <br/>
                                <div>
                                    <label>Icon</label>
                                    <input name="icon"
                                           type="file"
                                           className="form-control"/>
                                </div>
                                <br/>
                                <div>
                                    <label>Photo</label>
                                    <input name="photo"
                                           type="file"
                                           className="form-control"/>
                                </div>
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
        </>
    );

}
export default CategoryFirst;