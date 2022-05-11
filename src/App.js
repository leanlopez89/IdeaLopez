import React, { Component } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home"
import {AddProducts} from "./components/AddProducts"
import { ProductsContextProvider} from '.global/ProductsContext';

export class App extends Component {
  render() {
    return (
      <ProductsContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route exact path="addproducts" element= {<AddProducts/>} />
        </Routes>
      </BrowserRouter>
      </ProductsContextProvider>
    )
  }
}

export default App
