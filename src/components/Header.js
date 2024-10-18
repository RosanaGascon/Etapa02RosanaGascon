import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleCart }) => {
  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-3 bg-dark hero-header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="display-5 text-white mb-0">Food Menu</h1>
          <nav className="d-flex">
            <Link to="/" className="btn btn-link text-white mx-2">Home</Link>
            <Link to="/alta" className="btn btn-link text-white mx-2">Alta</Link>
            <Link to="/contacto" className="btn btn-link text-white mx-2">Contacto</Link>
          </nav>
          <button onClick={toggleCart} className="btn btn-primary">Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
