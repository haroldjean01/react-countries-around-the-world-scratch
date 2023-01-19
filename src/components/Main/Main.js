import React from 'react';
import useCountries from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();
  return (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </div>
  );
}
