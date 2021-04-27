import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/session/sessionSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    textTransform: 'capitalize'
  },
}));

function Profile() {
  const classes = useStyles();
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label={user.name}
        onDelete={handleLogout}
        color="secondary"
        deleteIcon={<ExitToAppIcon/>}
      />
    </div>
  );
}

export default Profile;
