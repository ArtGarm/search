import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    display: 'block',
    width: '100%',
    position: 'relative',
  },
  field: {
    width: `calc(100% - ${theme.spacing(4)}px)`,
  },
  button: {
    width: theme.spacing(4),
    padding: theme.spacing(0.25),
    minWidth: theme.spacing(4),
    borderRadius: 0,
  },
}));
