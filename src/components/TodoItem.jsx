const TodoItem = ({
  todoData,
  isComplited,
  toggleCheckbox,
  handleClickDeleteX,
}) => {
  return (
    <div
      className={
        isComplited
          ? "d-flex justify-content-center gap-5 p-4 m-5 bg-danger text-white"
          : "d-flex justify-content-center gap-5 p-4 m-5 bg-secondary text-white"
      }
    >
      <input
        className="form-check-input w-5 p-3"
        type="checkbox"
        checked={isComplited}
        onChange={toggleCheckbox}
      />
      <p>{todoData.text}</p>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleClickDeleteX(todoData.id)}
      >
        X
      </button>
      <p>{todoData.data}</p>

    </div>
  );
};

export default TodoItem;
