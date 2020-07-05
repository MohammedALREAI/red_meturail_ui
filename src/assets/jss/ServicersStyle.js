import theme from '../../Components/Ui/theme'
const ServicersStyle = {
  CustomText:{
    color: "#0b72b9",
    fontFamily: "Raleway",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  mysubtitle: {
    fontWeight: 400,
    marginTop: "1em",
    color: "#868686",
    fontFamily: "Roboto",
    fontSize: 24
  }, spanText: {
    color: "#ffba60",
    fontFamily: "Pacifico",
    fontSize: 24,
    fontWeight: 400,
    padding: 10,

  },
  ".MuiGrid-item":{
    margin:"auto"
  },
  learnMore: {
    marginTop:"3em",
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
export default ServicersStyle;
