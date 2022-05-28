import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";
import { getCartItems } from "./app/features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
