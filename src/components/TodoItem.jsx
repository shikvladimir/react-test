import React from 'react'

const TodoItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="photo"
        src={props.todos.img}
        alt="photo hastag" />
      <p className="card-text">
        {props.todos.text}
      </p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="{props.todos.isActiv}"/>
        <label>
          Запомнить
        </label>
      </div>
    </div>
  )
}

export default TodoItem
