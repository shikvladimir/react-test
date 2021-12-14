import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const shopAPI = axios.create({
    baseURL: 'https://61b71df4c95dd70017d412a1.mockapi.io/shop',
  })

  const [isCompleted, setComleted] = useState(false)

  const [todoData, setTododata] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const { data } = await shopAPI.get('/');
        setTododata(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTodoData();
  }, []);

  const toggleCheckbox = async id => {
    const todoDat = todoData.find(todoDat => todoDat.id === id)
    const { data } = await shopAPI.put(`/${id}`, { ...todoDat, isCompleted: !todoDat.isCompleted })
    setTododata(todoData.map(todoDat => todoDat.id === id ? data : todoDat))
  }

  const [input, setInput] = useState({
    text: '',
  })

  const handleInput =  (event) => {
    try{
      const newValue = event.target.value
      const newInput = {...input}
      setInput(newInput)
      console.log(newValue);
    }catch(error) {
      console.error(error);
    }
  }


  const handleClickAdd = async () => {
    try {
      const todo = {
        text: '',
        data: new Date().toLocaleTimeString(),
      }
      const response = await shopAPI.post('/', todo);
      console.log(todo)

      setTododata([...todoData, response.data])
      // setInput({
      //   text: '',
      // })
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickDeleteAll = async () => {
    try {
      // await shopAPI.delete()
      setTododata([])
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickDeleteX = async id => {
    try {
      await shopAPI.delete(`/${id}`) 
      setTododata(todoData.filter((todoDat) => todoDat.id !== id))
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className='container py-5'>
      <Header
        handleClickAdd={handleClickAdd}
        handleClickDeleteAll={handleClickDeleteAll}
        handleInput={handleInput}
        input={input}
      />
      <TodoList
        todoData={todoData}
        toggleCheckbox={toggleCheckbox}
        isComplited={isCompleted}
        handleClickDeleteX={handleClickDeleteX}
      />
    </div>
  );

}
export default App

