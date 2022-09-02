/* eslint-disable */
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Loading, Error } from '../components';
import { Actions } from '../components/Actions';
import { Description } from '../components/Description';
import { useFetchOne } from '../hooks';

export const ProductDetailPage = () => {
  const { productId } = useParams();
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
        <Container className='d-flex'>
          <Container fluid>
            <Image
              imageUrl={product.imgUrl}
              model={product.model}
            />
          </Container>
          <Container>
            <Description />
            <Actions />
          </Container>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
