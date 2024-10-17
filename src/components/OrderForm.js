// src/components/OrderForm.js
import React, { useState } from 'react';

const OrderForm = () => {
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotal = () => {
    // Lógica para calcular el total
    setTotalCost(100); // Ejemplo de cálculo
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el pedido
    alert('Pedido enviado');
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="col-lg-12 text-center mt-4">
          <button className="btn btn-primary" id="calculate-btn" onClick={calculateTotal}>Calcular Total</button>
          <p className="mt-3" id="total-cost">Total: ${totalCost.toFixed(2)}</p>
        </div>

        <div className="col-lg-8 m-auto px-5 py-2">
          <h4 className="text-center mt-4">Información de Contacto</h4>
          <form id="order-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Nombre:</label>
              <input className="form-control" id="name" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="address">Dirección de Entrega:</label>
              <input className="form-control" id="address" placeholder="Ingresa tu dirección" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">Número de Teléfono:</label>
              <input className="form-control" id="phone" placeholder="Ingresa tu teléfono" required type="tel" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Correo Electrónico:</label>
              <input className="form-control" id="email" placeholder="Ingresa tu correo" required type="email" />
            </div>
            <div className="col-lg-12 text-center mt-4">
              <button className="btn btn-success" id="submit-order" type="submit">Enviar Pedido</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;