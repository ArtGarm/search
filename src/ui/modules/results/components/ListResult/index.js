import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { LinearProgress, Typography, Grid } from '@material-ui/core';

import routes, { formatPath } from '../../../../routes';
import { fetchResults } from '../../ducks';
import SingleItem from '../SingleItem';

const ListResult = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.result.loading);
  const data = useSelector((store) => store.result.list);

  useEffect(() => {
    dispatch(fetchResults(qs.parse(search, { ignoreQueryPrefix: true })));
  }, [search, dispatch]);

  if (loading) return <LinearProgress />;
  if (!data.length)
    return <Typography align="center"> Search result is empty </Typography>;
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid
            item
            xs={4}
            key={item.id.text}
            component={Link}
            to={formatPath(routes.single, { id: item.best_book.id.text })}
          >
            <SingleItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ListResult;
