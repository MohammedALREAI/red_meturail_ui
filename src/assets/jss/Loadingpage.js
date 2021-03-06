import { useTheme } from '@material-ui/core/styles'

import theme from '../../Components/Ui/theme'
const LoadingStyle = {
  textHero: {
    color: "#0b72b9",
    fontFamily: "Raleway",
    fontSize: "40px",
    fontWeight: 700,
    fontStyle: "bold",
    textTransform: "capitalize",
  },
  svgButton: {
    width: "9px",
    height: "9px",
    backgroundColor: "#0b72b9",
    marginLeft: "9px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30",
    },
  },
  animationWrapper: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
  freeEstimate: {
    color: "#ffffff",
    fontFamily: "Pacifico",
    fontSize: "18px",
    fontWeight: 400,
    opacity: 0.89,
    textTransform: "capitalize",

    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.common.arcBlue,
      opacity: 1,
    },
  },

  hearo: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  leftWrapper: {
    minWidth: "21.2em",
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },




};

export default LoadingStyle;
