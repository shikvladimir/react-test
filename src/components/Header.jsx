const Header = ({ formData, handleFormData, handleClickAdd, handleClickDeleteAll}) => {

    return (
        <form className="d-flex" onSubmit={event => handleClickAdd(event)}>
            <button
                type="button"
                className="btn btn-info"
            onClick={event => handleClickDeleteAll(event)}
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
            >
                Add
            </button>
        </form>
    )
}

export default Header