import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const schema = Yup.object({
  name: Yup.string().min(3).max(30).required('Required'),
  number: Yup.string().min(3).max(15).required('Required'),
});

const ContactForm = ({ onAddContact }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={schema}
    onSubmit={(values, { resetForm }) => {
      onAddContact(values.name, values.number);
      resetForm();
    }}
  >
    <Form className={styles.form}>
      <div className={styles.group}>
        <label>Name</label>
        <Field name="name" type="text" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />
      </div>
      <div className={styles.group}>
        <label>Number</label>
        <Field name="number" type="text" className={styles.input} />
        <ErrorMessage name="number" component="div" className={styles.error} />
      </div>
      <button type="submit" className={styles.addButton}>
        Add Contact
      </button>
    </Form>
  </Formik>
);

export default ContactForm;
