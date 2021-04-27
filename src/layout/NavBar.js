import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Login from "../core/Login";
import { useSelector } from "react-redux";
import Profile from "../core/Profile";

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
  box: {
    display: 'flex',
    alignItems: 'center',
    gap: 15
  }

}));

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const amount = useSelector(state => state.game.amount);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Casino
          </Typography>
          <Box className={classes.box}>
            <Typography variant="body1">
              $ {amount.toFixed(2)}
            </Typography>
            {user ? <Profile /> : <Login />}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
