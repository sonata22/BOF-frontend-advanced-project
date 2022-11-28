import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllCategories } from "../../redux/reducers/categories";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

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
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={5}
        position="sticky"
        justifyContent="space-between"
        top={0}
        bgcolor="background.default"
        sx={{ zIndex: 5 }}
      >
        <Typography
          color="primary"
          variant="button"
          padding={2}
          fontSize={18}
          fontWeight={550}
        >
          Categories
        </Typography>
      </Box>
      <Divider variant="middle" />
      {categories.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="center"
        >
          {categories.map((item) => (
            <List key={item.id}>
              <Box>
                <Card sx={{ maxWidth: 260 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    alt={item.name}
                  />
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <CardActions>
                      <Link to={`/categories/${item.id}`}>
                        <IconButton color="primary">
                          <ReadMoreIcon />
                        </IconButton>
                      </Link>
                    </CardActions>
                    <Box paddingLeft={1.5}>{item.name}</Box>
                  </Box>
                </Card>
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
