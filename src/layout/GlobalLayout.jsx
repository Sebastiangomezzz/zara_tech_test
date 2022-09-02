import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export const GlobalLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        bg='light'
        variant='dark'>
        <Container>
          <Navbar.Brand href='#/'>
            <h1>NAVEGADOR</h1>
          </Navbar.Brand>
        </Container>
        <button
          className='btn btn-primary'
          onClick={() => navigate(-1)}>
          Back to List of devices
        </button>
      </Navbar>
      <main>{children}</main>
    </>
  );
};
