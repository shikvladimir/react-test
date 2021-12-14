const Header = ({ handleClickAdd, handleClickDeleteAll, handleInput, input }) => {

    return (
        <div className="d-flex" onSubmit={event => handleClickAdd(event)}>
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
                onChange={(event) => handleInput(event)}
                // value={input.text}
            />
            <button
                type="submit"
                className="btn btn-info"
                onClick={event => handleClickAdd(event)}
            >
                Add
            </button>
        </div>
    )
}

export default Header