import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <h2>{name}</h2>
      <img src={`https://flagcdn.com/64x48/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
