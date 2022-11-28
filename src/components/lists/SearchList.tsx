import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, List, ListItem, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";
import ReadMoreIcon from "@mui/icons-material/ReadMore";


const SearchList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const list = useAppSelector((state) => state.productReducer.products);
  const [search, setSearch] = useState("");
  const tempList = list.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={5}
        position="sticky"
        top={0}
        bgcolor="background.default"
        sx={{ zIndex: 5 }}
      >
        <h2>
          <ListItem>
            <SearchIcon color="primary" />
            <TextField
              id="seacrh"
              label="Search"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Tasty Metal Chips"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </ListItem>
        </h2>
      </Box>
      <Divider variant="fullWidth" />
      {tempList.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
        >
          {tempList.map((item) => (
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
                    </CardActions>
                    <Box paddingLeft={1.5}>${item.price}</Box>
                  </Box>
                </Card>
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <i>No items found</i>
      )}
    </div>
  );
};

export default SearchList;
