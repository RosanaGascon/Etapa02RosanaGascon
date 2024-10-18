import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import HelmetComponent from './components/HelmetComponent';
import CartModal from './components/CartModal';
import ProductForm from './components/ProductForm';
import ContactForm from './components/ContactForm';
import { ProductProvider } from './context/ProductContext';
import './assets/css/style.css'; // Importa el archivo CSS

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} agregado al carrito!`);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <HelmetComponent />
          <Header toggleCart={toggleCart} />
          <Routes>
            <Route path="/" element={<MainContent addToCart={addToCart} />} />
            <Route path="/alta" element={<ProductForm />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
          <Footer />
          <CartModal
            isOpen={isCartOpen}
            toggleCart={toggleCart}
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <ToastContainer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
