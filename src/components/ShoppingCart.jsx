import { useEffect } from 'react';
import cartIcon from '../icons/shopping-cart-of-checkered-design.png';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import lscache from 'lscache';

export const ShoppingCart = ({ itemsInCart, setItemsInCart }) => {
  const items = lscache.get('numberOfItemsInCart');
  useEffect(() => {
    if (items === null) {
      setItemsInCart('');
    } else {
      setItemsInCart(items);
    }
  }, [items]);

  return (
    <Container className='d-flex align-items-end flex-column'>
      <Badge
        pill
        bg='secondary'
        className='me-4'>
        {itemsInCart}
      </Badge>
      <img
        alt='cart-icon'
        src={cartIcon}
        className='grayscale'
        style={{
          width: '3rem',
          height: 'auto',
          borderRadius: '0.5rem'
        }}
      />
    </Container>
  );
};
