import { useState } from 'react';
import { BASE_URL } from '../constants';
import lscache from 'lscache';

export const useAddtoCart = ({ id, colors, memoryOptions }) => {
  const [formState, setFormState] = useState({
    id,
    colorCode: colors[0],
    storageCode: memoryOptions[0]
  });
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    const numberOfItemsInCart = await response.json();
    if (lscache.get('numberOfItemsInCart') === null) {
      console.log('No numberOfItemsInCart response', typeof numberOfItemsInCart.count);
      lscache.set('numberOfItemsInCart', numberOfItemsInCart.count, 60);
    } else {
      console.log('NumberOfItemsInCart response: ' + lscache.get('numberOfItemsInCart'));
      const itemsInCart = lscache.get('numberOfItemsInCart') + 1;
      lscache.set('numberOfItemsInCart', itemsInCart, 60);
    }
  };
  return { handleChange, handleSubmit };
};
