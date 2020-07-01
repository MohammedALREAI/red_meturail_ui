import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Logo from'../../assets/imges/logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import { MenuItem, Menu } from "@material-ui/core";
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "services",
    link: "/services",
  },
  {
    title: "The Revolution",
    link: "/revolution",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const MenuOptions = [

  {
    name: "Custom Software Development",
    link: "/customsoftware",
  },


  {
    name: "Mobile App Development",
    link: "/mobileapps",
  },
    {
            name: "web Software Development",
            link: "/websoftware",
          },
];

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "80px",
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
  },
  paper: {
    marginTop: "50px",
    ...theme.typography.tab,

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
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function Header(props) {
  const classes = useStyles();
const [value,setValue]=React.useState(0)
const [anchorEle,setAnchorEle]=React.useState(null);
const [open,setOpen]=React.useState(false);
const [indexSelected,setSelectedIndex]=React.useState(0);
const handleChange=(e,value)=>setValue(value);

const handleOpen = (event) => {
  setAnchorEle(event.currentTarget);
  setOpen(true)}

const handleClose = (event) => {
  setAnchorEle(null);
  setOpen(false)
}

const handleWithMenuOptions=(event,index)=>{
  setAnchorEle(event.target);
  setOpen(false);
  setSelectedIndex(index);

}

React.useEffect(()=>{

switch (window.location.pathname) {
  case "/":
    if (value !== 0) {
      setValue(0);
    }break;
  case "/services":
    if (value !== 1) {
      setValue(1);
    }break;

  case "/customsoftware":
    if (value !== 1) {
      setValue(0);
      setSelectedIndex(1);
    }break;
  case "/mobileapps":
    if (value !== 1) {
      setValue(1);
      setSelectedIndex(1);
    }
    break;
  case "/revolution":
    if (value !== 2) {
      setValue(2);
    }
    break;
  case "/about":
    if (value !== 3) {
      setValue(3);
    }
    break;
  case "/contact":
    if (value !== 4) {
      setValue(4);
    }
    break;
  case "/estimate":
    if (value !== 5) {
      setValue(5);
    }
    break;

  default:
    break;
}

},[value])
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={Logo} className={classes.logo} alt="logo company" />
            </Button>
            <Tabs
              className={classes.tabContainer}
              onChange={() => console.log("fdfd")}
              aria-label="navItems"
              value={0}
              indicatorColor="primary"
            >
              <Tab label="Home" className={classes.tab} />
              <Tab
                label="Services"
                aria-haspopup={anchorEle ? "true" : undefined}
                className={classes.tab}
                onMouseOver={(event) => handleOpen(event)}
                onClose={(event) => handleClose(event)}
                aria-owns={anchorEle ? "simple-menu" : undefined}
              />
              <Tab label="The Revolution" className={classes.tab} />
              <Tab label="About Us" className={classes.tab} />
              <Tab label="Contact Us" className={classes.tab} /> */}
            </Tabs>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
            >
              Free Estimate
            </Button>
            <Menu
              classes={{
                root: classes.meunItem,
                paper: classes.paper,
              }}
              elevation={0}
              onClose={(event) => handleClose(event)}
              id="simple-menu"
              anchorEl={anchorEle}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              {MenuOptions.map((item, index) => (
          <MenuItem
            key={`index${item.name}`}
            onClick={(event) => {
                    handleWithMenuOptions(event, index);
                    setValue(0);
                    handleClose();
                  }}
                  classes={{
                    root: classes.menuAll,
                  }}
                  component={Link}
                  to={item.link}
                  selected={index===indexSelected && value===1}
                >
                  {item.name}
                </MenuItem>              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );}

