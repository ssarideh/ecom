import "./Product.css";

const Products = ({ result }) => {
  return (
    <div className="product-container">
      <section className="card-container">{result}</section>
    </div>
  );
};

export default Products;
