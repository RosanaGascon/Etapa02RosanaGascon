import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const initialValues = {
    name: '',
    price: '',
    stock: '',
    brand: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    freeShipping: false,
    ageFrom: '',
    ageTo: '',
    photo: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    price: Yup.number().required('El precio es obligatorio').positive('El precio debe ser positivo'),
    stock: Yup.number().required('El stock es obligatorio').min(0, 'El stock no puede ser negativo'),
    brand: Yup.string().required('La marca es obligatoria'),
    category: Yup.string().required('La categoría es obligatoria'),
    shortDescription: Yup.string().required('La descripción corta es obligatoria'),
    longDescription: Yup.string().required('La descripción larga es obligatoria'),
    ageFrom: Yup.number().required('La edad desde es obligatoria').min(0, 'La edad no puede ser negativa'),
    ageTo: Yup.number().required('La edad hasta es obligatoria').min(Yup.ref('ageFrom'), 'La edad hasta debe ser mayor o igual a la edad desde'),
    photo: Yup.string().required('La foto es obligatoria')
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Formulario enviado', values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <div className="container bg-white p-5">
          <h2 className="text-center mb-4">Alta de Producto</h2>
          <Form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="price" className="form-label">Precio</label>
              <Field type="number" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="stock" className="form-label">Stock</label>
              <Field type="number" name="stock" className="form-control" />
              <ErrorMessage name="stock" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="brand" className="form-label">Marca</label>
              <Field type="text" name="brand" className="form-control" />
              <ErrorMessage name="brand" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="category" className="form-label">Categoría</label>
              <Field type="text" name="category" className="form-control" />
              <ErrorMessage name="category" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="shortDescription" className="form-label">Descripción Corta</label>
              <Field type="text" name="shortDescription" className="form-control" />
              <ErrorMessage name="shortDescription" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="longDescription" className="form-label">Descripción Larga</label>
              <Field type="text" name="longDescription" className="form-control" />
              <ErrorMessage name="longDescription" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3 form-check">
              <Field type="checkbox" name="freeShipping" className="form-check-input" id="freeShipping" />
              <label htmlFor="freeShipping" className="form-check-label">Envío sin Cargo</label>
              <ErrorMessage name="freeShipping" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ageFrom" className="form-label">Edad Desde</label>
              <Field type="number" name="ageFrom" className="form-control" />
              <ErrorMessage name="ageFrom" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ageTo" className="form-label">Edad Hasta</label>
              <Field type="number" name="ageTo" className="form-control" />
              <ErrorMessage name="ageTo" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="photo" className="form-label">Foto</label>
              <Field type="text" name="photo" className="form-control" />
              <ErrorMessage name="photo" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Enviar</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ProductForm;
