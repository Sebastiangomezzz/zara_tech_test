import Container from 'react-bootstrap/Container';
import { Loading, List, Error } from '../components';
import { useWindowResize, useFetch } from '../hooks';

export const ProductListPage = () => {
  const { breakPoint } = useWindowResize();
  const { data, isLoading, isError } = useFetch();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <Container>
          <List
            phonesData={data}
            breakPoint={breakPoint}
          />
        </Container>
      )}
    </>
  );
};
