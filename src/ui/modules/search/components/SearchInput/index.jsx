import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography, TextField, Grid } from '@material-ui/core';

import useStyles from './styles';

const SearchInput = ({
  field,
  form,
  form: { setFieldValue, setTouched, handleSubmit },
  className,
  placeholder,
  options,
  optionLoading,
  getOptions,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Autocomplete
      {...field}
      {...props}
      onChange={(_, value) => {
        setFieldValue(field.name, value);
        handleSubmit();
      }}
      onInputChange={(_, value) => {
        setFieldValue(field.name, value);
        getOptions(value);
      }}
      onBlur={() => setTouched({ [field.name]: true })}
      className={className}
      freeSolo
      disableClearable
      disablePortal
      loading={optionLoading}
      options={options}
      classes={{
        popper: classes.popper,
      }}
      getOptionLabel={(option) => (option.title ? option.title : option)}
      renderOption={(option) => (
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <img src={option.image} alt={option.title} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">{option.title}</Typography>
            <Typography variant="body1">{option.authorName}</Typography>
          </Grid>
        </Grid>
      )}
      renderInput={(params) => (
        <TextField {...params} {...props} placeholder={placeholder} />
      )}
    />
  );
};

export default SearchInput;

SearchInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
    setTouched: PropTypes.func,
    handleSubmit: PropTypes.func,
  }),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  getOptions: PropTypes.func,
  optionLoading: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
