import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../../modules/search/components/Search';

import useStyles from './styles';

const Search = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Grid item xs={6}>
        <SearchForm />
      </Grid>
    </Grid>
  );
};

export default Search;
