/* eslint-disable */
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';
import lscache from 'lscache';

export const useFetchOne = ({ productId }) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProduct = async (productId) => {
    try {
      setIsLoading(true);
      if (lscache.get(productId) === null) {
        const response = await fetch(`${BASE_URL}/product/${productId}`);
        const result = await response.json();
        setProduct(result);
        lscache.set(productId, result, 60);
        setIsLoading(false);
      } else {
        setProduct(lscache.get(`${productId}`));
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      throw new Error('There was an error at fetching data for one product:', error);
    }
  };
  return { product, fetchProduct, isLoading, isError };
};
