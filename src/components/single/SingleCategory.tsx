import { Avatar, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSingleCategory } from "../../redux/reducers/categories";
import CreateIcon from "@mui/icons-material/Create";

const SingleCategory = () => {
  const params = useParams();
  const categoryId = Number(params.categoryId);

  const category = useAppSelector(
    (state) => state.categoryReducer.singleCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSingleCategory(categoryId));
    }
  }, [dispatch, categoryId]);

  if (!category) {
    return <h1>Loading</h1>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      margin={1}
    >
      <h1>{category.name}</h1>
      <Avatar
        alt={category.name}
        src={category.image}
        sx={{ width: 200, height: 200 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        lineHeight={0}
        margin={1}
      >
        <h3>Category ID</h3>
        <p>{category.id}</p>
      </Box>
      <Button
        type="button"
        variant="contained"
        endIcon={<CreateIcon />}
        size="medium"
      >
        Edit
      </Button>
    </Box>
  );
};

export default SingleCategory;
