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
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decreaseAmount,
  emptyCart,
  increaseAmount,
  removeFromCart,
} from "../../redux/reducers/cart";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "../../types/Product";

const CartList = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cartReducer);
  console.log("call from fav list", cartList);
  const onDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const onIncrease = (item: Product) => {
    dispatch(increaseAmount(item));
  };
  const onDecrease = (item: Product) => {
    dispatch(decreaseAmount(item));
  };
  const onPurchase = () => {
    dispatch(emptyCart());
    alert("Thanks for purchase! Check your mail box to see the recipt.");
  };

  let sum = 0;
  cartList.forEach((element) => {
    sum += element.amount! * element.price;
  });

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
            <p>${sum}</p>
            <Button
              variant="contained"
              disabled={cartList.length === 0 ? true : false}
              onClick={onPurchase}
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
                    action={
                      <IconButton onClick={() => onDelete(item.id!)}>
                        <DeleteIcon />
                      </IconButton>
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
                    </CardActions>
                    <Box>
                      <IconButton
                        color="primary"
                        disabled={item.amount === 1 ? true : false}
                        onClick={() => onDecrease(item)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      {item.amount}
                      <IconButton
                        color="primary"
                        onClick={() => onIncrease(item)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Box paddingLeft={1.5}>${item.price * item.amount!}</Box>
                  </Box>
                </Card>
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
        >
          <i>Cart is empty. Add any product to cart and return back here.</i>
        </Box>
      )}
    </div>
  );
};

export default CartList;
