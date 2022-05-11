import React, { Component } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home"
import {AddProducts} from "./components/AddProducts"

export class App extends Component {
  render() {
    return (
      <ProductsContext.Provider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route exact path="addproducts" element= {<AddProducts/>} />


        </Routes>


      </BrowserRouter>
      </ProductsContext.Provider>
    )
  }
}

export default App
