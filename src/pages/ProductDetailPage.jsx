import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Loading, Error, Actions, Description } from '../components';
import { useFetchOne } from '../hooks';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, fetchProduct, isLoading, isError } = useFetchOne(productId);

  useEffect(() => {
    if (productId !== undefined) {
      fetchProduct(productId);
    }
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : product ? (
        <Container>
          <Container className='d-flex justify-content-end pe-4'>
            <Button
              variant='secondary'
              onClick={() => navigate(-1)}>
              Back to List of devices
            </Button>
          </Container>
          <Container className='d-flex'>
            <Container
              fluid
              className='mt-4'>
              <Image
                imageUrl={product.imgUrl}
                model={product.model}
              />
            </Container>
            <Container className='mt-4'>
              <Description product={product} />
              <Actions
                id={product.id}
                colors={product.colors}
                memoryOptions={product.internalMemory}
              />
            </Container>
          </Container>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
