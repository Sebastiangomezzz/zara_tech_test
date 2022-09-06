import { useState } from 'react';
import { BASE_URL } from '../constants';

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
    console.log(numberOfItemsInCart);
  };
  return { handleChange, handleSubmit };
};
