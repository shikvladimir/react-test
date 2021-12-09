import { useState } from "react";

const Header = ({ formData, handleFormData, handleClickAdd, handleClickDeleteAll}) => {

    // const [dataset, setDataset] = useState([])


    // const handleChange = (event) => {
    //     setTododata(...todoData,)
    //     console.log(event.target.value)
    // }

    return (
        <form className="d-flex" onSubmit={event => handleClickAdd(event)}>
            <button
                type="button"
                className="btn btn-info"
            onClick={event => handleClickDeleteAll(event)}
            // value={props.value}
            >
                Delete All
            </button>
            <input
                type="text"
                className="form-control"
                placeholder="Enter todo ..."
                name='text'
                onChange={(event) => handleFormData(event)}
                value={formData.value}
            />
            <button
                type="submit"
                className="btn btn-info"
            // onClick={event => props.handleClickAdd(event)}
            // value={props.value}
            >
                Add
            </button>
        </form>
    )
}

export default Header
