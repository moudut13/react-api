import React from "react";

const CategoryThird = (props) =>{
    //Category First Show
    const dataFirstCategory = props.data.map((data,idx)=>{
        return[
            <option value={data.id}>{data.name}</option>
        ]
    })


    return(
        <>

            <div className="d-none d-sm-flex align-items-center mb-3">
                <div className="h5">Category Third</div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                data-bs-target="#categoryThirdFormShowModal">Add Category Third</button>
                    </div>
                </div>
            </div>
            <hr/>



            <div className="modal fade" id="categoryThirdFormShowModal" tabIndex="-1"
                 style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Third Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label className="form-label">Parent Category Name</label>
                                    <select name="parent"

                                            className="form-select mb-3"
                                            aria-label="Default select example">
                                        <option selected="" value='option'>--Select Parent Category--</option>
                                        {dataFirstCategory}
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label">Second Parent Category Name</label>
                                    <select name="parent"

                                            className="form-select mb-3"
                                            aria-label="Default select example">
                                        <option selected="" value='option'>--Select Parent Category--</option>
                                    </select>
                                </div>
                                <br/>
                                <div>
                                    <label className="form-label">Name</label>
                                    <input name="name"
                                           className="form-control"
                                           type="text"
                                           placeholder="Third Category Name" />
                                </div>
                                <div>
                                    <label className="form-label">Photo</label>
                                    <input name="photo"
                                           className="form-control"
                                           type="file"
                                           alt="Third Category Name" />
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
export default CategoryThird;