import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import HelmetComponent from './components/HelmetComponent';
import OrderForm from './components/OrderForm';
import MenuScript from './components/MenuScript';
import OrderModal from './components/OrderModal';

function App() {
  const [orderMessage, setOrderMessage] = useState('');

  const handleOrderSubmit = (message) => {
    setOrderMessage(message);
    const modal = new window.bootstrap.Modal(document.getElementById('orderModal'));
    modal.show();
  };

  return (
    <div className="App">
      <HelmetComponent />
      <Header />
      <Menu />
      <MainContent />
      <OrderForm onOrderSubmit={handleOrderSubmit} />
      <MenuScript />
      <OrderModal orderMessage={orderMessage} />
      <Footer />
    </div>
  );
}

export default App;
