const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "250px"
      }}
    >
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
    </div>
  );
};

export default ProductCard;
