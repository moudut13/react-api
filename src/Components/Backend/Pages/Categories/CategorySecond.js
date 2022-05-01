import React ,{useState} from "react";
import CategorySecondChild from "./CategorySecondChild";
import axios from "axios";
import GetCategorySecondChildData from "./GetCategorySecondChildData";



const CategorySecond = (props) =>{

    const dataFirstCategory = props.data.map((data,idx)=>{

        return[
            <option value={data.id}>{data.name}</option>
        ]
    })

    const [inputField , setInputField] = useState({
        name: '',
        icon: '',
        photo: '',
        nameError : ''
    })

    const getInitialState = () => {
        const value = '';
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    //Add second Category Validation
    const Validation = () => {
        if (!inputField.name > 0) {
            setInputField({nameError: "Name Field Are Required!"});
        }else {
            return true;
        }
    }

    //Add second Category getInput
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    //Add second Category
    const onCategorySecondSubmit = e =>{
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/category-second', {
                categoryfirst_id : value,
                name: inputField.name,
            })
        }
    }

    let CategorySecond = props.second;


    return(
        <>

            <div className="d-none d-sm-flex align-items-center mb-3">
                <div className="h5">Category Second</div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                data-bs-target="#categorySecondFormShowModal">Add Category Second</button>
                    </div>
                </div>
            </div>
            <hr/>
            <GetCategorySecondChildData data={CategorySecond}/>


            <div className="modal fade" id="categorySecondFormShowModal" tabIndex="-1"
                 style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form onSubmit={onCategorySecondSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Second Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label className="form-label">Parent Category Name</label>
                                    <select name="parent"
                                            value={value}
                                            onChange={handleChange}
                                            className="form-select mb-3"
                                            aria-label="Default select example">
                                            <option selected="" value='option'>--Select Parent Category--</option>
                                        {dataFirstCategory}
                                    </select>
                                </div>
                                <CategorySecondChild data={inputsHandler}/>
                                <strong>{inputField.nameError}</strong>
                                <br/>
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
export default CategorySecond;