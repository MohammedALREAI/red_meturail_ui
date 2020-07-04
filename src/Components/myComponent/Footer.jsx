import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import footerStyle from "../../assets/jss/Footer";
import { Grid } from "@material-ui/core";
import LogoFooter from "../../assets/imges/Footer Adornment.svg";
import Hidden from "@material-ui/core/Hidden";

const socialMedia = [
  {
    name: "facebook",
    url: "www.facebook.com",
    icon: require("../../assets/imges/facebook.svg"),
  },
  {
    name: "twitter",
    url: "www.twitter.com",
    icon: require("../../assets/imges/twitter.svg"),
  },
  {
    name: "instagram",
    url: "www.instagram.com",
    icon: require("../../assets/imges/instagram.svg"),
  },
];
const links = [
  { title: "Home", link: "/", subLink: [{}] },
  {
    title: "Services",
    link: "/services",
    subLink: [
      {
        name: "Custom Software Development",
        link: "/customsoftware",
      },
      {
        name: "iOS/Android App Development",
        link: "/mobileapps",
      },
      {
        name: "Website Development",
        link: "/websites",
      },
    ],
  },
  {
    title: "The Revolution",
    link: "/revolution",
    subLink: [
      {
        name: "",
        link: "/websites",
      },
    ],
  },
  { title: "About Us", link: "/about", subLink: [{}] },
  { title: "Contact Us", link: "/contact", subLink: [{}] },
];

const Footer = (props) => {
  const useStyles = makeStyles(footerStyle);
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                href="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/mobileapps"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                href="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                href="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black decorative slash"
        src={LogoFooter}
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        {socialMedia.map((item, index) => (
          <Grid
            key={`index-${index}_${item.name}`}
            item
            component={"a"}
            href={item.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt={item.name} src={item.icon} className={classes.icon} />
          </Grid>
        ))}
      </Grid>
    </footer>
  );
};

export default Footer;
