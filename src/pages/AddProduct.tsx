import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Category } from "../types/Category";

const AddProduct = () => {
  return (
    <div>
      <form action="">
        Add Product Form
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
        <label htmlFor="description">Title</label>
        <input type="text" id="description" />
        
      </form>
    </div>
  );
};

export default AddProduct;
