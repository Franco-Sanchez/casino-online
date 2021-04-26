import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    width: '100%',
    padding: '0 35px',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <h6>Copyright - Derechos reservados</h6>
    </footer>
  )
}

export default Footer;