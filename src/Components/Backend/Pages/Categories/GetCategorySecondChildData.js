import React from "react";
import axios from "axios";

const GetCategorySecondChildData = (props) => {
    let Second = props.data;

    const handelSecondCategoryDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/category-second/'+id)
    }

    let num = 1;
    const getSecondCategoryData = Second.map((data,idx)=>{
        return[
            <tr>
                <th scope="row" key={idx}>{num}<span style={{display:'none'}}>{num++}</span></th>
                <td>{data.name}</td>
                <td>{data.slug}</td>
                <td>{data.name}</td>
                <td>Icon</td>
                <td>Photo</td>
                <td><a className="btn btn-sm btn-danger" onClick={() => handelSecondCategoryDelete(data.id)}>Delete</a></td>
            </tr>
        ]
    })

    return(
        <div className="card">
            <div className="card-body">
                <table className="table mb-0 table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Category Slug</th>
                        <th scope="col">Parent Category Name</th>
                        <th scope="col">Category Icon</th>
                        <th scope="col">Category Photo</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {getSecondCategoryData}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default GetCategorySecondChildData;