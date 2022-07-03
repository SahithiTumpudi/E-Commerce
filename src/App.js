import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Products from './components/Products';
import { NavLink, Routes, Route, Link } from 'react-router-dom';

function App() {
return (
<div>
    <Navbar/>
    <Routes>
        <Route path="/products/:id" element={<Product />} />
    </Routes>
    <Footer/>
</div>
)
}
export default App;