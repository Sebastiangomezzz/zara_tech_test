import cartIcon from '../assets/icons/shopping-cart-of-checkered-design.png';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
  const itemsInCart = useSelector((storeState) => storeState.cart.value);

  return (
    <Container className='d-flex align-items-end flex-column'>
      <Badge
        pill
        bg='secondary'
        className='me-4'>
        {itemsInCart > 0 && itemsInCart}
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
