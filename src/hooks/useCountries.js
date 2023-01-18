import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}
