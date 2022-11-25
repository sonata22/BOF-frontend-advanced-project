import { Box, Divider, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const SearchList = () => {
  const list = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

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
            <input
              type="text"
              name="text"
              id="text"
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
