import { Box, Divider, LinearProgress, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";
import CategoryIcon from "@mui/icons-material/Category";

const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={5}
        position="sticky"
        top={0}
        bgcolor="white"
        sx={{ zIndex: 5 }}
      >
        <h2>
          <ListItem>
            <CategoryIcon color="primary" />
            Products List
          </ListItem>
        </h2>
      </Box>
      <Divider variant="fullWidth" />
      {products.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {products.map((item) => (
            <List key={item.id}>
              <Box
                width={210}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img src={item.images[0]} alt={item.title} width="205px" />
                <Link to={JSON.stringify(item.id)}>
                  <b>{item.title}</b>
                </Link>
                <i>${item.price}</i>
                {item.description}
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
