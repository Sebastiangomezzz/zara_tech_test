import { Link } from 'react-router-dom';
export const ListItemCard = ({ id, imageUrl, brand, model, price }) => {
  return (
    <div
      className='card'
      style={{
        width: '15rem',
        height: 'auto',
        padding: '0.5rem',
        margin: '0.5rem'
      }}>
      <Link to={`${id}`}>
        <img
          style={{ borderRadius: '0.5rem' }}
          src={imageUrl}
          alt={model}
        />
        <div className='card-body'>
          <h6 className='card-title'>{brand}</h6>
          <h4 className='card-text'>{model}</h4>
          <p className='card-text'>{price} €</p>
        </div>
      </Link>
    </div>
  );
};
