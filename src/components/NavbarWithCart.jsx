import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, ShoppingCart } from '../components';

export const NavbarWithCart = () => {
  const location = useLocation();

  const [itemsInCart, setItemsInCart] = useState();

  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='mb-4 px-4'>
      <Container className='d-flex align-items-start flex-column justify-content-start'>
        <Navbar.Brand>
          <Link to='/'>
            <h1>OldMobiles.com</h1>
          </Link>
        </Navbar.Brand>
        <Breadcrumbs location={location} />
      </Container>
      <ShoppingCart
        setItemsInCart={setItemsInCart}
        itemsInCart={itemsInCart}
      />
    </Navbar>
  );
};
