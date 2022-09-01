export const Image = ({ imageUrl, model }) => {
  return (
    <img
      style={{ width: '20rem', height: 'auto' }}
      src={imageUrl}
      alt={model}
    />
  );
};
