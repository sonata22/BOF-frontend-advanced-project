import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'

import SearchList from '../components/lists/SearchList';
import { useAppDispatch } from '../redux/hooks';
import { authenticate } from '../redux/reducers/users';

const Search = () => {
  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={1.5}>
          {/** Placeholder */}
        </Grid>
        <Grid item xs={10.5}>
          <SearchList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search