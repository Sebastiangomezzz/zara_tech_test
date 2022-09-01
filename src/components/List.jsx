import { ListItemCard } from './ListItemCard';

export const List = ({ phonesData }) => {
  return (
    <div className='row'>
      {phonesData.map((phone) => {
        return (
          <ListItemCard
            id={phone.id}
            key={phone.id}
            imageUrl={phone.imgUrl}
            brand={phone.brand}
            model={phone.model}
            price={phone.price}
          />
        );
      })}
    </div>
  );
};
