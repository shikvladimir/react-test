const TodoItem = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-around  m-4  bg-secondary text-white">
            <input className="form-check-input" style={{height: "35px", width: "35px"}} type="checkbox" value="" />
      <p>{props.todo.text}</p>
      <div className="d-flex flex-column m-3">
      <button type="button" className="btn btn-info m-3">X</button>
      <button type="button" className="btn btn-light m-3">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
