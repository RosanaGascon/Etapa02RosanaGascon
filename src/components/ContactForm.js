import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    comments: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Email inválido').required('El email es obligatorio'),
    comments: Yup.string().required('Los comentarios son obligatorios')
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Formulario enviado', values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <div className="container p-5 bg-white">
          <h2 className="text-center mb-4">Contacto</h2>
          <Form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="comments" className="form-label">Comentarios</label>
              <Field as="textarea" name="comments" className="form-control" rows="4" />
              <ErrorMessage name="comments" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Enviar</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
