import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from "react-redux";
import { logout } from "../features/session/sessionSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Profile() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogout = () => dispatch(logout());

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label="Franco"
        onDelete={handleLogout}
        color="secondary"
        deleteIcon={<ExitToAppIcon/>}
      />
    </div>
  );
}

export default Profile;
