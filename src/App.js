import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Error,
  Products,

} from './pages';
import AddCar from './pages/AddCar';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='add-car' element={<AddCar />} />
        <Route path='*' element={<Error />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
