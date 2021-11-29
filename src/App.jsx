import Header from './components/Header'
import TodoList from './components/TodoList'
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }

  const todos = [{
    id: 1,
    text: 'Number ONE',
    isActiv: false,
  },
  {
    id: 2,
    text: 'Number TWO.',
    isActiv: false,
  },
  {
    id: 3,
    text: 'Number THRY',
    isActiv: false,
  }]

  return (
    <div className='container py-5'>
      <Header
        onClick={handleInput} value={inputValue}
      />
      <TodoList data={todos} />
    </div>
  );
}

export default App
