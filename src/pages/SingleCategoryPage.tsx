import { Box, Grid } from '@mui/material';
import React from 'react'
import SingleCategory from '../components/SingleCategory';

const SingleCategoryPage = () => {
  return (
    <div>
      <div>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/**<NavBar /> */}
            </Grid>
            <Grid item xs={7}>
              <SingleCategory />
            </Grid>
            <Grid item xs={3}>
              <h1>Something here</h1>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default SingleCategoryPage