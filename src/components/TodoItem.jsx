import { useState } from "react";

const TodoItem = (props) => {

  const [isComplited, setComlited] = useState(false)

  const handleClickDeleteX = () => {
    console.log('ClickDeleteX!');
  }

  const toggleCheckbox = () => {
    setComlited(!isComplited)
  }

  return (
    <div className={isComplited ? "d-flex justify-content-center gap-5 p-4 m-5 bg-danger text-white" : "d-flex justify-content-center gap-5 p-4 m-5 bg-secondary text-white"}>
      <input
        className="form-check-input w-5 p-3"
        type="checkbox"
        checked={isComplited}
        onChange={toggleCheckbox}
      />
      <p>{props.todo.text}</p>
      <button
        type="button"
        className="btn btn-info"
        onClick={handleClickDeleteX}>
        X
      </button>
      <button type="button" className="btn btn-light">Delete</button>
    </div>
  )
}

export default TodoItem