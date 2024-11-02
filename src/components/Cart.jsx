import { useCart } from "./CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, total } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <ul className="cart-item-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">Price: {item.price} €</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h1 className="cart-total">Total: {total.toFixed(2)} €</h1>
    </div>
  );
};

export default Cart;
