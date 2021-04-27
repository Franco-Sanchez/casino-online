import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import {
  createGame,
  cleanGame,
  nothing,
  hit,
  threeEqualNumbers,
  twoEqualNumbers,
} from "../features/game/gameSlice";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 32,
  },
  result: {
    textAlign: 'center',
    fontSize: 60,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlotMachine() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const amount = useSelector((state) => state.game.amount);
  const result = useSelector(state => state.game.result);
  const records = useSelector((state) => state.game.records);
  const dispatch = useDispatch();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    dispatch(cleanGame());
  };

  const getRandomNumber = () => Math.floor(Math.random() * 9 + 1);

  const awards = (game) => {
    const quantityNumbers = Object.values(game).slice(1, 4).reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});

    const arrKeys = Object.keys(quantityNumbers);

    if (arrKeys.length === 2) {
      dispatch(twoEqualNumbers());
    } else if (arrKeys.length === 1 && arrKeys[0] === "7") {
      dispatch(hit());
    } else if (arrKeys.length === 1) {
      dispatch(threeEqualNumbers());
    } else {
      dispatch(nothing());
    }
  };

  const transformDate = () => {
    const date = new Date(Date.now());
    const newFormat = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    return format(newFormat, "HH:mm:ss");
  };

  const handleCreateGame = () => {
    const id = records.length > 0 ? records[records.length - 1]['id'] + 1 : 1;
    const objGame = {
      id,
      firstNumber: getRandomNumber(),
      secondNumber: getRandomNumber(),
      thirdNumber: getRandomNumber(),
      date: transformDate()
    };
    dispatch(createGame(objGame));
    awards(objGame);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Start
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="body1" className={classes.title}>
              $ {amount.toFixed(2)}
            </Typography>
            <Button
              autoFocus
              color="secondary"
              variant="contained"
              onClick={handleCreateGame}
            >
              Play!
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant="body1" className={classes.result} color="primary">
          {result}
        </Typography>
        <Game />
      </Dialog>
    </div>
  );
}
