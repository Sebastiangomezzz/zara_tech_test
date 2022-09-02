import Col from 'react-bootstrap/Col';
import { ListItemCard } from './ListItemCard';

export const Column = ({ breakPoint, phone }) => {
  if (breakPoint === 'xxl') {
    return (
      <Col
        className='justify-content-center'
        key={phone.id}
        lg={3}>
        <ListItemCard
          id={phone.id}
          imageUrl={phone.imgUrl}
          brand={phone.brand}
          model={phone.model}
          price={phone.price}
        />
      </Col>
    );
  } else if (breakPoint === 'xs') {
    return (
      <Col
        className='justify-content-center'
        key={phone.id}
        xs={12}>
        <ListItemCard
          id={phone.id}
          imageUrl={phone.imgUrl}
          brand={phone.brand}
          model={phone.model}
          price={phone.price}
        />
      </Col>
    );
  } else
    return (
      <Col
        key={phone.id}
        className='justify-content-center'>
        <ListItemCard
          id={phone.id}
          imageUrl={phone.imgUrl}
          brand={phone.brand}
          model={phone.model}
          price={phone.price}
        />
      </Col>
    );
};
