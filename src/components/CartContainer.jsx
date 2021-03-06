import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "../app/features/cart/cartSlice";
import { openModal } from "../app/features/modal/modalSlice";
import { CartItem } from "./CartItem";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, count, total } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  const handleClick = () => dispatch(openModal());

  if (!count) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>&#8377;{total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClick}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};
