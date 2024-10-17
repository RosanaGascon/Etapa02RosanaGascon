// src/components/HelmetComponent.js
import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = () => {
  return (
    <Helmet>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </Helmet>
  );
};

export default HelmetComponent;
