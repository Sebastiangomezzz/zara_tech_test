import Container from 'react-bootstrap/Container';
import { Loading, List, Error } from '../components';
import { useWindowResize } from '../hooks';
import { useGetProductsQuery } from '../store/api/productsApi';

export const ProductListPage = () => {
  const { breakPoint } = useWindowResize();
  const { data: products, isLoading, isError, isSuccess } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : isSuccess ? (
        <Container>
          <List
            phonesData={products}
            breakPoint={breakPoint}
          />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
