import { Box, List } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";

const ProductsByCategory = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const list = useAppSelector((state) => state.productReducer.products);
  const params = useParams();
  const categoryId = Number(params.categoryId);
  const tempList = list.filter((item) => item.category?.id == categoryId);
  return (
    <div>
      {tempList.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {tempList.map((item) => (
            <List key={item.id}>
              <Box
                width={210}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {item.images && (
                  <img src={item.images[0]} alt={item.title} width="205px" />
                )}
                <Link to={`../../products/${item.id}`}>
                  <b>{item.title}</b>
                </Link>
                <i>${item.price}</i>
                {item.description}
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <i>No products in this category</i>
      )}
    </div>
  );
};

export default ProductsByCategory;
