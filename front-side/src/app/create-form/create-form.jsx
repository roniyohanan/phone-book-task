/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './create-form.module.scss';
import ContactService from '../../services/contacts.service';
import { contactsFields } from '../cards/contacts.config';

const CreateForm = ({ update }) => {
  const [createForm, setCreateForm] = useState({});
  const [error, setError] = useState(null);

  const changeForm = (value, field) => {
    setCreateForm({ ...createForm, [field]: value });
  };

  const onCreate = async () => {
    try {
      await ContactService.create(createForm);
      update(true);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={styles.root}>
      {contactsFields.map((field) => {
        return (
          field.field === 'id' ? <span key={field.field} />
            : (
              <div key={field.field} className={styles.row}>
                <p className={styles.text}>{`${field.label}: `}</p>
                <input
                  className={styles.input}
                  placeholder={field.label}
                  onChange={(e) => changeForm(e.target.value, field.field)}
                />
              </div>
            )
        );
      })}
      {error ? <span className={styles.validationErr}>*Not all inputs are valid*</span> : ''}
      <button className={styles.button} onClick={() => onCreate()}>
        Create
      </button>
    </div>
  );
};

export default CreateForm;

CreateForm.propTypes = {
  update: PropTypes.func.isRequired,
};
