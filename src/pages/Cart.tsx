import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const navigate = useNavigate(); //error says it needs to be wrapped in useEffect
  const user = useAppSelector((state) => state.userReducer.currentUser); // get value of currentUser
  if (!user) {
    navigate("/login");
  }

  return <div>Cart</div>;
};

export default Cart;
