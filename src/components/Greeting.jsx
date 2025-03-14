import React from 'react';
import { useTranslation } from 'react-i18next';

const Greeting = ({ name }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name })}</p>
    </div>
  );
};

export default Greeting;