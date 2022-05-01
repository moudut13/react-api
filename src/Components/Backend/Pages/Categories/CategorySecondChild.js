import React from "react";

const CategorySecondChild = (props) => {
    return(
        <>
            <div>
                <label className="form-label">Name</label>
                <input name="name"
                       onChange={props.data}
                       value={props.data.parent}
                       className="form-control"
                       type="text"
                       placeholder="Category First Name" />
            </div>
            <strong></strong>
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
        </>
    );
}
export default CategorySecondChild;