import React from 'react'
import TodoItem from './components/TodoItem'
import Navbar from './components/Navbar'


const App = () => {
  const quantitys = [1,2,3]
  const attributs = {
    id: 1,
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    img: 'https://i.pinimg.com/originals/03/e0/9e/03e09e0a900811a8452647899212d900.png',
    isActiv: false,
  }

  return (
    <div className='container'>
      <Navbar/>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-around">
        {quantitys.map(quantity=><TodoItem todos={attributs}/>)}
        </div>
      </div>
    </div>
  );
}

export default App
