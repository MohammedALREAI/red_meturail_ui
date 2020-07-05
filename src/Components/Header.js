import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Logo from'../assets/imges/logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import { MenuItem, Menu } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from'@material-ui/core/IconButton'
// import renderList from'./ListComponent'
import List from'@material-ui/core/List'
import ListItem from'@material-ui/core/ListItem'
import ListItemText from'@material-ui/core/ListItemText'
import headerStyle from"../assets/jss/Header";
import { MenuOptions } from "./utils";


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
  const { setValue, indexSelected, value,setSelectedIndex}=props;

const useStyles = makeStyles(headerStyle);
  const theme = useTheme();
  const classes = useStyles();

const [anchorEle,setAnchorEle]=React.useState(null);
const [open,setOpen]=React.useState(false);
const [mobileOpen,setMobileOpen]=React.useState(false);
const handleChange=(e,value)=>setValue(value);

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
 const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEle ? "simple-menu" : undefined,
      ariaPopup: anchorEle ? "true" : undefined,
      mouseOver: event => handleOpen(event),
      clickclose:(event) => handleClose(event)
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 }
  ];
React.useEffect(()=>{
  [...MenuOptions,...routes].forEach(route => {
switch (window.location.pathname) {
      case `${route.link}`:
      if(value!==route.activeIndex)
      setValue(route.activeIndex);
      if(route.selectedIndex && route.selectedIndex!==indexSelected)
setSelectedIndex(route.selectedIndex)
        break;

      default:
        break;
    }

  });



},[value, routes, indexSelected, setValue, setSelectedIndex])


  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        onChange={() => console.log("fdfd")}
        aria-label="navItems"
        value={0}
        indicatorColor="primary"
      >
      {routes.map((item,index)=>(
        <Tab label={item.name}
                 key={`index-${index}`}
                  component={Link}
                to={item.link}
                className={classes.tab}
                aria-owns={item.ariaOwns}
                aria-haspopup={item.ariaPopup}
                onMouseOver={item.mouseOver}
                onClose={item.clickclose}/>
      ))}




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
        keepMounted
        elevation={0}
        onClose={(event) => handleClose(event)}
        id="simple-menu"
        anchorEl={anchorEle}
        open={open}

        MenuListProps={{ onMouseLeave: handleClose }}
        onClose={handleClose}
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
            selected={index === indexSelected && value === 1}
          >
            {item.name}
          </MenuItem>))}
      </Menu>
    </>)





  const Drawer=(
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
        open={mobileOpen} onClose={() => setMobileOpen(false)}
         anchor={"right"}
        swipeAreaWidth={30}
        classes={{
           paper: classes.drawerPaper

        }}
        className={classes.drower}
        onOpen={() => setMobileOpen(true)}>



        <List className={classes.mylist}>
{routes.map((item,index)=>(
<ListItem divider button
  onClick={()=>{
  handleDrawerToggle();

setValue(item.activeIndex)
}

}
 selected={value===item.activeIndex}
 classes={{selected:classes.drowItemSelected}}
 >
<ListItemText disableTypography component={Link}
 className={value===item.activeIndex?[classes.drower,classes.itemselected]: classes.drower} to={item.link}>{item.name}</ListItemText>
</ListItem>
  ))}
<ListItem divider button  onClick={handleDrawerToggle} className={classes.drowEstimate}>
<ListItemText disableTypography component={Link} className={classes.drowEstimate} to="/estimate">estimate

</ListItemText>
</ListItem>

</List>

      </SwipeableDrawer>
       <IconButton className={classes.drawer} onClick={handleDrawerToggle}
        disableRipple>
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
  </>
  )
return (
    <>
      <ElevationScroll classes={{ borderRadius: "3px",}}>
        <AppBar position="fixed" classes={{ root:classes.appBar}} color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple>
              <img src={Logo} className={classes.logo} alt="logo company" />
            </Button>
          {matches ? Drawer :tabs}

          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )}

