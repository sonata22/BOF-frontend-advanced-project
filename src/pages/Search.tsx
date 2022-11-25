import { Box, Grid } from '@mui/material';
import React from 'react'
import SearchList from '../components/lists/SearchList';

const Search = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/** Placeholder */}
        </Grid>
        <Grid item xs={8}>
          <SearchList />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Search