
import theme from'../../Components/Ui/theme'
const headerStyle={

  drowItemSelected:{
"&.MuiListItemText-root":{
  opacity:1
}
  },
appBar:{
zIndex:theme.zIndex.model+1,
  position:"relative",
     borderRadius: "3px",
 padding:0,
  marginBottom: "20px",
  boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",

  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]: {
      height: "2em",
    },
    [theme.breakpoints.down('sm')]: {
      height: "1.25em",
    },
 itemText:{},
  mylist:{
textTransform:"capitalize",
padiing:"10px"  },
  drawerPaper:{
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
marginTop:"4.4em",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    borderRadius:"5px",
boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
fontFamily:"Roboto",
fontSize:"22px",
backgroundColor:theme.palette.common.white
  },

  },
  logo: {
    height: "7em",
    //this to soport responce the application image
    [theme.breakpoints.down('md')]:{
      height: "6em",
    },
    [theme.breakpoints.down('sm')]:{
      height: "5em",
    },


  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10",
    padding: "10px",
    textTransform: "capitalize",
    // fontSize: "1em",
    fontSize: "18px",
    fontWeight: "400",
  },
  button: {
    ...theme.typography.estimate,
    marginRight: "23px",
    marginLeft: "50px",
    borderRadius: "50px",
    color: "white",
    textTransform: "capitalize",
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  meunItem: {
    color: "white",
    top: 65,
    backgroundColor: "#93278f",
    position: "relative"


  },
  paper: {
    marginTop: "50px",
    ...theme.typography.tab,
    // display: "none",
    // position: "absolute",

    background: "#1F2531",
    opacity: 1,
    borderRadius: "5px",

  padding: "12px 8px",
  width: "100 %",
  minWidth: "100px",


    backgroundColor: "#51c9f5",
    color: "white",
    fontFamily: "Roboto",
    marginRight: "auto", /* 1 */
  marginleft: "auto", /* 1 */
  paddingRight: "10px", /* 3 */
  paddingLeft:  "10px"
  },
  menuAll: {
    padiing: "5px",
    borderBottom: "1px solid #0b72b9",
    opacity: "0.7",
    margin: "3px",
    ...theme.typography.tab,

    "&:hover": {
      opacity: 1,
      boxShadow:" 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025)",
      borderBottom: "3px solid #51c9f5",
    },
  },
  drawer:{
    marginLeft:"auto",
    "&:hover":{
      backgroundColor:"transparent",

    }
  },
  menuIcon:{
    width:"50px",
    height:"50px"
  },
  deowItem:{
    backgroundColor:"orange"
  },
drowEstimate:{
      backgroundColor:"orange"

},
itemselected:{
  opacity:0.93,


}


}
export default headerStyle;
