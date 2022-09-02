export const Image = ({ imageUrl, model }) => {
  return (
    <img
      style={{ width: '15rem', height: 'auto' }}
      src={imageUrl}
      alt={model}
    />
  );
};
