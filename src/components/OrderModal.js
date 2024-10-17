import React, { useState } from 'react';
import '../assets/css/style.css'; 
const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="btn btn-primary">Open Modal</button>
      {isOpen && (
        <div id="orderModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <div id="order-details">Order details go here...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderModal;
