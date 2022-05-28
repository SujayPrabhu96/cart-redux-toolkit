import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

export const Navbar = () => {
  const { count } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{count}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
