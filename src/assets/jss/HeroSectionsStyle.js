import theme from '../../Components/Ui/theme'
const HeroSectionsStyle = {

  textHero:{
  color: '#0b72b9',
  fontFamily: 'Raleway',
  fontSize: 40,
  fontWeight: 700,

  },
  freeEstimate:{
    // Style for "Free Estim"
      color: '#ffffff',
      fontFamily: 'Pacifico',
      fontSize: 18,
      fontWeight: 400,
      borderRadius:"50px",
      backgroundColor: '#ffba60',

  },
  animationWrapper: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  }
  ,

    learnMore: {
      marginTop: "3em",
      color: "#0b72b9",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "28px",
      border: "2px solid #0b72b9",
      backgroundColor: "white",
      textTransform: "capitalize",
      "& span": {
        marginLeft: "9px",
      },
    },
    "&:hover": {
      color: "black",
      border: `2px solid ${theme.palette.common.arcOrange}`,
      backgroundColor: "#0b72b9",
    },
  }




export default HeroSectionsStyle;
