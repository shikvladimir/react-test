const Header = (props) => {

    const handleClickAdd = () => {
        console.log('ClickAdd!');
    }

    const handleClickDeleteAll = () => {
        console.log('ClickDeleteAll!');
    }

    return (
        <nav className="d-flex">
            <button
                type="button"
                className="btn btn-info"
                onClick={handleClickDeleteAll}>
                Delete All
            </button>
            <input
                type="text"
                className="form-control"
                placeholder="Enter todo ..."
                onChange={event => props.onClick(event)}
                value={props.value}
            />
            <button
                type="button"
                className="btn btn-info"
                onClick={handleClickAdd}>
                Add
            </button>
        </nav>
    )
}

export default Header
