import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => (
        <div
          className="product-item"
          key={productIndex}
          style={{ width: "30%" }}
        >
          <img src={productItem.url} alt={productItem.name} />
          <p>
            {productItem.name} | {productItem.category}
          </p>
          <p>{productItem.seller}</p>
          <p>Rs. {productItem.price} /-</p>
          <button onClick={() => addToCart({ ...productItem, quantity: 1 })}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
