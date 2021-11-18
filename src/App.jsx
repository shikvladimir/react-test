
import React from 'react'
import Item from './components/Item'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Menu/>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-around">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}

export default App
