import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";

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
        bgcolor="white"
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
                <Link to={`../products/${item.id}`}>
                  <b>{item.title}</b>
                </Link>
                <i>${item.price}</i>
                {item.description}
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
