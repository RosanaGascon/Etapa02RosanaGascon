import React from 'react';
import menu1 from '../assets/images/menu-1.jpg';
import menu2 from '../assets/images/menu-2.jpg';
import menu3 from '../assets/images/menu-3.jpg';
import menu4 from '../assets/images/menu-4.jpg';
import menu5 from '../assets/images/menu-5.jpg';
import menu6 from '../assets/images/menu-6.jpg';

const MainContent = () => {
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
          <div className="col-lg-6" data-item="Chicken Burger">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu1} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>Chicken Burger</span> <span className="text-primary">$115</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-item="Cheese Pizza">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu2} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>Cheese Pizza</span> <span className="text-primary">$120</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-item="Pasta Alfredo">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu3} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>Pasta Alfredo</span> <span className="text-primary">$90</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-item="Grilled Salmon">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu4} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>Grilled Salmon</span> <span className="text-primary">$150</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-item="Caesar Salad">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu5} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>Caesar Salad</span> <span className="text-primary">$80</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-item="BBQ Ribs">
            <div className="d-flex align-items-center">
              <img alt="" className="flex-shrink-0 img-fluid rounded" src={menu6} style={{ width: '80px' }} />
              <div className="d-flex flex-column ps-4 text-start w-100">
                <h5 className="d-flex border-bottom justify-content-between pb-2">
                  <span>BBQ Ribs</span> <span className="text-primary">$170</span>
                </h5>
                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
};

export default MainContent;
