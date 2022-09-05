import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        className='mb-4'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <h1>OldMobiles.com</h1>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main>{children}</main>
    </>
  );
};
