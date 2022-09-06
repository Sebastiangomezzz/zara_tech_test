/* eslint-disable */
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';

export const useFetchOne = ({ productId }) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProduct = async (productId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/product/${productId}`);
      const result = await response.json();
      setProduct(result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      throw new Error('There was an error at fetching data for one product:', error);
    }
  };
  return { product, fetchProduct, isLoading, isError };
};
