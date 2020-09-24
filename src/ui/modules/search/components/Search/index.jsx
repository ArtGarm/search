import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Formik, Field } from 'formik';
import qs from 'qs';
import { Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import SearchInput from '../SearchInput';
import routes, { formatPath } from '../../../../routes';
import useStyles from './styles';
import { fetchSearch } from '../../ducks';

const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loading = useSelector((state) => state.search.loading);
  const list = useSelector((state) => state.search.list);

  const options = list.reduce(
    (acc, item) => [
      ...acc,
      {
        id: item.best_book.id.text,
        title: item.best_book.title.text,
        authorName: item.best_book.author.name.text,
        image: item.best_book.small_image_url.text,
      },
    ],
    []
  );

  const getOptions = (value) =>
    value !== '' &&
    typeof value !== 'object' &&
    dispatch(
      fetchSearch({
        q: value,
      })
    );

  const onSubmit = (values) => {
    if (typeof values.q === 'object') {
      dispatch(
        push({
          pathname: formatPath(routes.single, {
            id: values.q.id,
          }),
        })
      );
    } else {
      dispatch(
        push({
          pathname: routes.results,
          search: qs.stringify(values),
        })
      );
    }
  };

  return (
    <Formik initialValues={{ q: '' }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container justify="space-between" alignItems="flex-end">
            <Field
              name="q"
              options={options}
              className={classes.field}
              placeholder="search"
              optionLoading={loading}
              component={SearchInput}
              getOptions={getOptions}
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              <SearchIcon />
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Search;
