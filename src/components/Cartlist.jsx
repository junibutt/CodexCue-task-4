import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart.map((item) => ({ ...item, quantity: item.quantity || 1 })));
  }, [cart]);

  return (
    <div>
      {CART.map((cartItem, cartIndex) => (
        <div className="cart-item" key={cartIndex}>
          <img src={cartItem.url} alt={cartItem.name} />
          <span>{cartItem.name}</span>
          <button
            onClick={() => {
              const updatedCart = CART.map((item, index) =>
                cartIndex === index
                  ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                  : item
              );
              setCART(updatedCart);
            }}
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button
            onClick={() => {
              const updatedCart = CART.map((item, index) =>
                cartIndex === index
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
              setCART(updatedCart);
            }}
          >
            +
          </button>
          <span>Rs. {cartItem.price * cartItem.quantity}</span>
        </div>
      ))}

      <div className="total">
        Total: Rs.{" "}
        {CART.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
}

export default CartList;
