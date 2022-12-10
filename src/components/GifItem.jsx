export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      {title}
      <img src={url} alt={title} />
    </div>
  );
};
