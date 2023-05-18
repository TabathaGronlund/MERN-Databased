import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/edit/:id" emelment={<UpdateProduct/>}/>
        <Route path="/products" element={<ProductList/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
