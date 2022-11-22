import { Box, LinearProgress, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts, updateProduct } from "../../redux/reducers/products";

const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      {products.length > 0 ? (
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {products.map((item) => (
            <List key={item.id}>
              <Box width={210}>
                <ListItem>
                  <img src={item.images[0]} alt="Image" width="200px" />
                </ListItem>
                <ListItem>
                  <Link to={JSON.stringify(item.id)}>Title: {item.title}</Link>
                </ListItem>
                <ListItem>Description: {item.description}</ListItem>
                <ListItem>${item.price}</ListItem>
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};

export default ProductsList;
