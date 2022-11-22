import { Avatar, Box, LinearProgress, List, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllCategories } from "../../redux/reducers/categories";

const CategoriesList = () => {
  const categories = useAppSelector(
    (state) => state.categoryReducer.categories
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  return (
    <div>
      <h1>All Categories</h1>
      {categories.length > 0 ? (
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {categories.map((item) => (
            <List key={item.id}>
              <Box width={200}>
                <ListItem>
                  <Avatar
                    alt={item.name}
                    src={item.image}
                    sx={{ width: 180, height: 180 }}
                  />
                </ListItem>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  lineHeight={1.2}
                  margin={1}
                >
                  <Link to={`/categories/${item.id}`}>{item.name}</Link>
                  ID: {item.id}{" "}
                </Box>
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

export default CategoriesList;
