import { useState, useEffect } from 'react';
import { useAddProductMutation } from '../store/api/productsApi';

export const useAddtoCart = ({ id, colors, memoryOptions }) => {
  const [addProduct, result] = useAddProductMutation();
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
    await addProduct(formState);
  };
  useEffect(() => {
    console.log(result.data);
  }, [result]);
  return { handleChange, handleSubmit };
};
