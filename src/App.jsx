import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState } from "react";


const App = () => {

  const [isComplited, setComlited] = useState(false)

  const toggleCheckbox = (id) => {
    // const todoData = todoData.find(todoData => todoData.id === id)
    setComlited(todoData.find(todoData => todoData.id === id ? !todoData.isComplited: !isComplited))
    }

  const [todoData, setTododata] = useState([]);

  const [formData, setFormData] = useState({
    text: '',
    data: new Date().toLocaleTimeString(),
    checked: false 
  })

  const handleFormData = event => {
    const field = event.target.getAttribute('name')
    const newFormData = { ...formData }
    newFormData[field] = event.target.value

    setFormData(newFormData)
  }

  const handleClickAdd = (event) => {
    event.preventDefault()
    setTododata([...todoData, formData])
  }

  const handleClickDeleteAll = () => {
    setTododata([])
  }

  const handleClickDeleteX = (id) => {
    setTododata(todoData.filter((todoData) => todoData.id !== id))
  }

  return (
    <div className='container py-5'>
      <Header formData={formData} handleFormData={handleFormData}
        handleClickAdd={handleClickAdd}
        handleClickDeleteAll={handleClickDeleteAll}
      />
      <TodoList todoData={todoData}
        toggleCheckbox={toggleCheckbox}
        isComplited={isComplited}
        handleClickDeleteX={handleClickDeleteX}
      />
    </div>
  );

}
export default App

