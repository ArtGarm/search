/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, LinearProgress } from '@material-ui/core';

import { fetchSingle } from '../../ducks';

const Book = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.single.loading);
  const data = useSelector((store) => store.single.single);

  useEffect(() => {
    dispatch(fetchSingle(params));
  }, [params, dispatch]);

  if (loading) return <LinearProgress />;

  return (
    <Grid item xs={12}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={3}>
          <img src={data.image_url.text} alt={data.title.text} />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                {data.title.text || data.title._cdata}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {Array.isArray(data.authors.author)
                  ? data.authors.author.reduce(
                      (acc, item) =>
                        acc ? `${acc}, ${item.name.text}` : item.name.text,
                      ''
                    )
                  : data.authors.author.name.text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Book;
