import TodoItem from "./TodoItem"

const TodoList = ({ todoData, isComplited, toggleCheckbox, handleClickDeleteX}) => {

    return (
        <div>
            {todoData.map(todoData => (
                <TodoItem key={todoData.id} todoData={todoData}
                    toggleCheckbox={toggleCheckbox}
                    isComplited={isComplited}
                    onClick={handleClickDeleteX}
                />
            ))}
        </div>
    )
}

export default TodoList
