import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
  const classes = useStyles();

  const handleDelete = () => {
    console.log('Cerrar sesión')
  };

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label="Franco"
        onDelete={handleDelete}
        color="secondary"
        deleteIcon={<ExitToAppIcon/>}
      />
    </div>
  );
}

export default Profile;
