// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import HelmetComponent from './components/HelmetComponent';
import OrderModal from './components/OrderModal';
import OrderForm from './components/OrderForm';


function App() {
  return (
    <div className="App">
      <HelmetComponent />
      <Header />
      <Menu />
      <MainContent />
      <OrderForm />
      <OrderModal />
      <Footer />
    </div>
  );
}

export default App;