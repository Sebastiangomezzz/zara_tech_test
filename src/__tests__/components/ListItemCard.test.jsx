import { render, screen } from '@testing-library/react';
import { ListItemCard } from '../../components/ListItemCard';
import { MemoryRouter } from 'react-router-dom';

describe('ListItemCardTest', () => {
  const id = 'dblsdkfsfdf';
  const imageUrl = 'http://kjhkjhkj.com';
  const brand = 'Brand';
  const model = 'Model';
  const price = '121';
  beforeAll(() => {
    render(
      <ListItemCard
        id={id}
        imageUrl={imageUrl}
        brand={brand}
        model={model}
        price={price}
      />,
      { wrapper: MemoryRouter }
    );
  })
  test('should render the image with the supplied imgUrl and alt values', () => {
    const { alt, src } = screen.getByRole('img');
    expect(alt).toBe(model);
    expect(src).toBe(imageUrl + '/');
  });
  test('should render the brand and model of the product', () => {
    //expect(screen.getByText(brand)).toBeTruthy();
    screen.debug()
  })
});
