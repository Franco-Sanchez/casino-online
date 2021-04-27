import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 18
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <h6>Copyright - All rights reserved</h6>
    </footer>
  )
}

export default Footer;