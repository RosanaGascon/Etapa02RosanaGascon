import React from 'react';

const CartModal = ({ isOpen, toggleCart, cartItems, updateQuantity, removeItem }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="modal show" style={{ display: 'block' }} onClick={toggleCart}>
      <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Carrito de Compras</h5>
            <button type="button" className="btn-close" onClick={toggleCart}></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p className="text-center">El carrito está vacío</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                  <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '50px' }} />
                  <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-1">{item.price} x {item.quantity} = {item.price * item.quantity}</p>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="modal-body border-top">
            <h5 className="text-end">Total: ${calculateTotal()}</h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={toggleCart}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
