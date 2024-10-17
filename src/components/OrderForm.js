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
          <button id="calculate-btn" className="btn btn-primary" onClick={calculateTotal}>Calcular Total</button>
          <p id="total-cost" className="mt-3">Total: ${totalCost.toFixed(2)}</p>
        </div>

        <div className="col-lg-8 m-auto px-5 py-2">
          <h4 className="text-center mt-4">Información de Contacto</h4>
          <form id="order-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Dirección de Entrega:</label>
              <input type="text" className="form-control" id="address" placeholder="Ingresa tu dirección" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Número de Teléfono:</label>
              <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu teléfono" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
            </div>
            <div className="col-lg-12 text-center mt-4">
              <button id="submit-order" className="btn btn-success" type="submit">Enviar Pedido</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
