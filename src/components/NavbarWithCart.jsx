import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import cartIcon from '../icons/shopping-cart-of-checkered-design.png';
import { Breadcrumbs } from '../components';

export const NavbarWithCart = () => {
  const location = useLocation();
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='mb-4'>
      <Container className='d-flex align-items-start flex-column justify-content-start'>
        <Navbar.Brand>
          <Link to='/'>
            <h1>OldMobiles.com</h1>
          </Link>
        </Navbar.Brand>
        <Breadcrumbs location={location} />
      </Container>
      <Container className='d-flex align-items-end flex-column'>
        <Badge
          pill
          bg='secondary'
          className='me-4'>
          3
        </Badge>
        <img
          style={{
            width: '3rem',
            height: 'auto',
            borderRadius: '0.5rem'
          }}
          src={cartIcon}
        />
      </Container>
    </Navbar>
  );
};
