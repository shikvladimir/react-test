const Header = (props) => {

    const handleClick = () => {
        console.log('Click!');
    }

    return (
        <nav className="container d-flex">
            <button type="button" className="btn btn-info">Delete All</button>
            <input
                type="text"
                className="form-control"
                placeholder="Enter todo ..."
                onChange={event => props.onClick(event)}
                value={props.value} />
            <button className="btn btn-info" onClick={handleClick}>Add</button>
        </nav>
    )
}

export default Header
