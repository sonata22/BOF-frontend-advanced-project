import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromCart } from "../../redux/reducers/cart";
import CancelIcon from "@mui/icons-material/Cancel";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const CartList = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cartReducer);
  console.log("call from fav list", cartList);
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const onDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <header>
        <Box
          display="flex"
          flexDirection="row"
          paddingLeft={5}
          position="sticky"
          justifyContent="space-between"
          top={0}
          bgcolor="white"
          sx={{ zIndex: 5 }}
        >
          <h2>
            <i>Cart</i>
          </h2>
          <Box display="flex" alignItems="center" gap={0.5} marginRight={4.5}>
            <p>Total: $999</p>
            <Button
              variant="contained"
              disabled={cartList.length === 0 ? true : false}
            >
              Purchase
            </Button>
          </Box>
        </Box>
        <Divider variant="middle" />
      </header>
      {cartList.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
        >
          {cartList.map((item) => (
            <List key={item.id}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar alt={item.title} src={item.category?.image} />
                    }
                    title={item.title}
                    subheader={item.category?.name}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.images[0]}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <CardActions>
                      <Link to={`../products/${item.id}`}>
                        <IconButton color="primary">
                          <ReadMoreIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() => onDelete(item.id!)}
                        sx={{ position: "relative" }}
                      >
                        <CancelIcon />
                      </IconButton>
                    </CardActions>
                    <Box paddingLeft={1.5}>${item.price}</Box>
                  </Box>
                </Card>
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <i>Cart is empty. Add any product to cart and return back here.</i>
      )}
    </div>
  );
};

export default CartList;
