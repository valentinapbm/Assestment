import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route index element={<Home />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="productdetail/:id" element={<ProductDetail></ProductDetail>} />
          <Route exact path="/about" element={<About></About>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
