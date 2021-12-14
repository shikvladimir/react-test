const TodoItem = ({ todoDat,handleClickDeleteX,toggleCheckbox }) => {
  return (

    <div
      className={

        todoDat.isCompleted
          ? "d-flex justify-content-center gap-5 p-4 m-5 bg-danger text-white"
          : "d-flex justify-content-center gap-5 p-4 m-5 bg-secondary text-white"
      }
    >
      <input
        className="form-check-input w-5 p-3"
        type="checkbox"
        checked={todoDat.isCompleted}
        onChange={() => toggleCheckbox(todoDat.id)}
      />

      <p>{todoDat.text}</p>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleClickDeleteX(todoDat.id)}>X</button>
      <p>{todoDat.data}</p>
    </div>
  );
};


export default TodoItem;
