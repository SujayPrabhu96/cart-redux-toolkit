import React from "react";
import { useDispatch } from "react-redux";
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem } from "../app/features/cart/cartSlice";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeItem(id));

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">&#8377;{price}</h4>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
