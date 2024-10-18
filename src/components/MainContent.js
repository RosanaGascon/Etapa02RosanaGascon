import React from 'react';
import menu1 from '../assets/images/menu-1.jpg';
import menu2 from '../assets/images/menu-2.jpg';
import menu3 from '../assets/images/menu-3.jpg';
import menu4 from '../assets/images/menu-4.jpg';
import menu5 from '../assets/images/menu-5.jpg';
import menu6 from '../assets/images/menu-6.jpg';

const products = [
  { id: 1, name: 'Chicken Burger', price: 115, image: menu1, description: 'Delicious chicken burger' },
  { id: 2, name: 'Cheese Pizza', price: 120, image: menu2, description: 'Cheesy pizza' },
  { id: 3, name: 'Pasta Alfredo', price: 90, image: menu3, description: 'Creamy pasta alfredo' },
  { id: 4, name: 'Grilled Salmon', price: 150, image: menu4, description: 'Grilled salmon with herbs' },
  { id: 5, name: 'Caesar Salad', price: 80, image: menu5, description: 'Fresh Caesar salad' },
  { id: 6, name: 'BBQ Ribs', price: 170, image: menu6, description: 'Tender BBQ ribs' },
];

const MainContent = ({ addToCart }) => {
  return (
    <main>
      <div className="container-xxl bg-white py-5">
        <div className="container">
          <div className="text-center fadeInUp wow" data-wow-delay="0.1s">
            <h5 className="text-center ff-secondary fw-normal section-title text-primary">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-content">
            <div className="active fade p-0 show tab-pane" id="tab-1">
              <div className="g-4 row">
                {products.map(product => (
                  <div key={product.id} className="col-lg-6" data-item={product.name}>
                    <div className="d-flex align-items-center">
                      <img alt="" className="flex-shrink-0 img-fluid rounded" src={product.image} style={{ width: '80px' }} />
                      <div className="d-flex flex-column ps-4 text-start w-100">
                        <h5 className="d-flex border-bottom justify-content-between pb-2">
                          <span>{product.name}</span> <span className="text-primary">${product.price}</span>
                        </h5>
                        <small className="fst-italic">{product.description}</small>
                        <div className="d-flex justify-content-end w-100">
                          <button onClick={() => addToCart(product)} className="btn btn-primary mt-2" style={{ width: '50%' }}>Agregar al Carrito</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
