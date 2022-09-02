/* eslint-disable */
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';

export const useFetchOne = ({ productId }) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (productId !== undefined) {
      console.log(productId, product);
    }
  }, [productId, product]);

  const fetchProduct = async (productId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/product/${productId}`);
      const results = await response.json();
      setProduct(results);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      throw new Error('There was an error at fetching data for one product');
    }
  };
  return { product, fetchProduct, isLoading, isError };
};
