import { Loading, List, Error } from '../components';
import Container from 'react-bootstrap/Container';
import { useFetch } from '../hooks/useFetch';
import { useWindowResize } from '../hooks/useWindowResize';

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
