import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductQuantity, removeProductFromCart, clearCart } from '../components/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateProductQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Checkout successful! Your cart has been cleared.');
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: ${item.price.toFixed(2)}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
                aria-label={`Quantity of ${item.title}`}
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;


//Component:
// Create a Shopping Cart component where users can view and manage the products within their cart.
// Display a list of products currently added to the cart, including details such as product title, quantity, and price.
// Provide options for users to update the quantity of each product in the cart, allowing them to increase, decrease, or remove items as needed.
