import React, {Component} from "react";
import axios from "axios";

const CategoryFirst =(props) =>{

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
          <h6 className="mb-0 text-uppercase">Category First</h6>
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
        </>
    );

}
export default CategoryFirst;