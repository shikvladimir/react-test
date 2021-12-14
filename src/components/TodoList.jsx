import TodoItem from "./TodoItem"

const TodoList = ({ todoData, handleClickDeleteX, toggleCheckbox }) => {

    return (
        <div>
            {todoData.map(todoDat => (
                <TodoItem key={todoDat.id} todoDat={todoDat}
                    handleClickDeleteX={handleClickDeleteX}
                    toggleCheckbox={toggleCheckbox} />
            ))}
        </div>
    )
}

export default TodoList
