import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [isComplited, setComlited] = useState(false);

  const toggleCheckbox = (event) => {
    setComlited(!isComplited);
  };

  const [todoData, setTododata] = useState([]);

  const [formData, setFormData] = useState({
    text: "",
  });

  const handleFormData = (event) => {
    const field = event.target.getAttribute("name");
    const newFormData = { ...formData };
    newFormData[field] = event.target.value;

    setFormData(newFormData);
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    setTododata([...todoData, formData])
    setFormData('')
  };

  const handleClickDeleteAll = () => {
    console.log("ClickDeleteAll!");
  };

  const handleClickDeleteX = (id) => {
    setTododata(todoData.filter((todoData) => todoData.id !== id));
  };

  return (
    <div className="container py-5">
      <Header
        formData={formData}
        handleFormData={handleFormData}
        handleClickAdd={handleClickAdd}
        handleClickDeleteAll={handleClickDeleteAll}
      />
      <TodoList
        todoData={todoData}
        toggleCheckbox={toggleCheckbox}
        isComplited={isComplited}
        handleClickDeleteX={handleClickDeleteX}
      />
    </div>
  );
};
export default App;
