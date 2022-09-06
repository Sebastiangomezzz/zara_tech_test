import { Card, Form, Button } from 'react-bootstrap';
import { useAddtoCart } from '../hooks/useAddtoCart';

export const Actions = ({ id, colors, memoryOptions }) => {
  const { handleChange, handleSubmit } = useAddtoCart({ id, colors, memoryOptions });
  return (
    <Card>
      <Form
        className='p-2'
        onSubmit={handleSubmit}>
        <Form.Label>Color</Form.Label>
        <Form.Select
          className='mb-2'
          name='colorCode'
          onChange={handleChange}
          disabled={colors.length <= 1 ? true : false}>
          {colors.map((color) => {
            return (
              <option
                key={color}
                value={color}>
                {color}
              </option>
            );
          })}
        </Form.Select>
        <Form.Label>Memory size</Form.Label>
        <Form.Select
          className='mb-4'
          name='storageCode'
          onChange={handleChange}
          disabled={memoryOptions.length <= 1 ? true : false}>
          {memoryOptions.map((memoryOptions) => {
            return (
              <option
                key={memoryOptions}
                value={memoryOptions}
                defaultValue={memoryOptions}>
                {memoryOptions}
              </option>
            );
          })}
        </Form.Select>
        <Button type='submit'>Add to cart</Button>
      </Form>
    </Card>
  );
};
