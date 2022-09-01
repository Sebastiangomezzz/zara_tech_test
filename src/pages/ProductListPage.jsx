import { Loading, List, Error } from '../components';
import { useFetch } from '../hooks/useFetch';

export const ProductListPage = () => {
  const { data, isLoading, isError } = useFetch();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <div className='container-fluid'>
          <List phonesData={data} />
        </div>
      )}
    </div>
  );
};
