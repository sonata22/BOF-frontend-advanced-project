import { Box, LinearProgress, List, ListItem } from "@mui/material";
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
      <h1>List of All Categories</h1>
      {categories.length > 0 ? (
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {categories.map((item) => (
            <List key={item.id}>
              <Box width={210}>
                <ListItem>
                  <img src={item.image} alt="Image" width="200px" />
                </ListItem>
                <ListItem>
                  <Link to={`/categories/${item.id}`}>{item.name}</Link>
                </ListItem>
                <ListItem>ID: {item.id}</ListItem>
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
