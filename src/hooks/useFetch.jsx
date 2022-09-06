import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';
import lscache from 'lscache';

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      if (lscache.get('results') === null) {
        const response = await fetch(`${BASE_URL}/product`);
        const results = await response.json();
        setData(results);
        lscache.set('results', results, 60);
        setIsLoading(false);
      } else {
        setData(lscache.get('results'));
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      throw new Error('There was an error at fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
};
