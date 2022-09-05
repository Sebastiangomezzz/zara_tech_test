import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Loading, Error } from '../components';
import { Actions } from '../components/Actions';
import { Description } from '../components/Description';
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
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : product ? (
        <Container>
          <Container classname='d-flex justify-content-end'>
            <button
              className='btn btn-primary dashed mt-2'
              onClick={() => navigate(-1)}>
              Back to List of devices
            </button>
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
