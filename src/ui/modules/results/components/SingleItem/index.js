import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

// eslint-disable-next-line camelcase
const SingleItem = ({ best_book }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <img src={best_book.image_url.text} alt={best_book.title.text} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6" gutterBottom>
          {best_book.title.text}
        </Typography>
        <Typography variant="body1">{best_book.author.name.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default SingleItem;

SingleItem.propTypes = {
  best_book: PropTypes.shape({
    image_url: PropTypes.shape({
      text: PropTypes.string,
    }),
    title: PropTypes.shape({
      text: PropTypes.string,
    }),
    author: PropTypes.shape({
      name: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  }),
};
