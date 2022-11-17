import { Box, LinearProgress, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchAllProducts,
  updateProduct,
} from "../redux/reducers/products";

const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const onEdit = () => {
    dispatch(
      updateProduct({
        id: 3,
        data: {
          id: 3,
          title: "THIS is changed product",
          price: 300,
          description: "This changed product is highly not recommended to buy",
          images: [
            "https://api.lorem.space/image/watch?w=640&h=480&r=6151",
            "https://api.lorem.space/image/watch?w=640&h=480&r=2296",
            "https://api.lorem.space/image/watch?w=640&h=480&r=1097",
          ],
        },
      })
    );
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      {products.length > 0 ? (
        <Box display="flex" flexDirection="row">
          <Carousel navButtonsAlwaysVisible={true} fullHeightHover={false}>
            {products.map((item) => (
              <List key={item.id}>
                <img src={item.images[0]} alt="Image" width="200px" />
                <ListItem>
                  <Link to={JSON.stringify(item.id)}>Title: {item.title}</Link>
                </ListItem>
                <ListItem>Description: {item.description}</ListItem>
                <ListItem>${item.price}</ListItem>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <button type="button">Like</button>
                  <button type="button">Add to Cart</button>
                  <button type="button" onClick={onEdit}>
                    Edit
                  </button>
                  <button type="button">Delete</button>
                </Box>
              </List>
            ))}
          </Carousel>
        </Box>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};

export default ProductsList;
