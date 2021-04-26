import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Login from '../core/Login';
import Profile from '../core/Profile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Casino
          </Typography>
          <Box mr={1}>${(99).toFixed(2)}</Box>
          {/* Crear condicional para mostrar el nombre del usuario */}
          <Login />
          {/* <Profile /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;