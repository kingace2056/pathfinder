import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba( 0, 0, 0, 0.7)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,1)',
      outline: '1px solid slategrey',
    },
  },
  //nav elements
  logo: {
    flexGrow: 1,
  },

  //ater nav
  paper: {
    height: '90vh',
    background: 'grey',
    overflow: 'auto',
  },

  //side
  title: {
    textTransform: 'capitalize',
  },
  side: {
    padding: '15px',
  },

  //tabs
  tabs: {
    backgroundColor: 'rgba(255, 255, 255, .25)',
    backdropFilter: 'blur(5px)',
    margin: '4px 5px ',
    padding: '0px 5px',
  },

  tabBtn: {
    position: 'absolute',
    top: '490px',
    right: '30px',
    zIndex: '1',
    padding: '10px 10px',
    color: 'white',
    backgroundColor: 'rgb(220, 0, 220)',
    '&:hover': {
      backgroundColor: 'rgba(220, 50, 200)',
    },
  },

  //sort wrap
  cnv: {
    margin: 'auto -20px auto 20px',
  },

  formWrap: {
    margin: '10px auto 10px 0px',
    padding: '20px',
    display: 'grid',
    background: 'none',
    backdropFilter: 'blur(10px)',
  },
  info: {
    display: 'block',
    margin: '10px 10px',
  },

  //form elements
  form: {
    margin: '0px 1px 2px 1px',
    padding: '20px',
    borderRadius: '4px',
  },
  sliderWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '200px',
  },
  slider1: {
    marginTop: '25px',
    width: '200px',
  },

  sortDesc: {
    padding: '20px 0 0 10px',
  },
}))

export default useStyles
