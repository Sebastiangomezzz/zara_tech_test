import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
  return (
    <Spinner
      className='position-fixed top-0 end-0'
      animation='border'
      variant='success'
    />
  );
};
