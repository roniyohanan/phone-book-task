/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cards.module.scss';
import { contactsFields } from './contacts.config';

const InfoCard = ({ cardData }) => (
  <div className={styles.info}>
    {contactsFields.map((field) => (
      <div key={field.field}>
        <p>{`${field.label}: ${cardData[field.field]}`}</p>
      </div>
    ))}
  </div>
);

export const Cards = ({ data }) => (
  <div className={styles.root}>
    {data.map((cardData) => (
      <InfoCard
        key={cardData.id}
        cardData={cardData}
      />
    ))}
  </div>
);

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

InfoCard.propTypes = {
  cardData: PropTypes.shape({}).isRequired,
};
