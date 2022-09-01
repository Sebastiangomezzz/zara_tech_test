import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(productId);
  }, [productId]);

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => navigate(-1)}>
        Back to List of devices
      </button>
    </div>
  );
};
