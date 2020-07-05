import React from 'react'
import { Typography, Grid, Button, makeStyles, useMediaQuery, Container } from '@material-ui/core';
import arrowHero from "../assets/svgs/arrowHero.svg";
import theme from './Ui/theme';
import ServicersStyle from '../assets/jss/ServicersStyle';
import { Link } from 'react-router-dom';






export const Servicers = () => {
  const useStyles = makeStyles(ServicersStyle);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const CustomSoftware = () => {
    return (
      <Typography
        variant="subtitle1"
        className={classes.mysubtitle}

      >
        Save Energy. Save Time. Save Money.
        <br /> Complete digital solutions, from investigation
        <br /> to{" "}
        <span className={classes.spanText}>
          {" "}
        celebration.
      </span>
      </Typography>
    )
  }
  const webServices = () => (
  <Typography
    variant="subtitle1"
    className={classes.mysubtitle}>
    Reach More. Discover More. Sell more.<br />
Optimized for Search Engines,
    <br />built for speed.
  </Typography>
  )
  const MobileServices = () => {
    return (
    <Typography
      variant="subtitle1"
      className={classes.mysubtitle}>
      Extend Functionality. Extend Access. Increase Engagement.
      <br />
        Integrate your web experience or create a standalone app
      <br />
        with either mobile platform.
    </Typography>
    )
  }


  const Services = [
    {
      name:"Custom Software Development",
      description: <CustomSoftware />,
      to:"/",
      flex: "flex-start",

      alt:"Custom",
      icon: require("../assets/imges/Custom Software Icon.svg"),
    },
    {
      name: "iOS/Android App Development",
      description: <MobileServices />,
      to:"/mobileapps"
      , alt:"iOS/Android",
      flex: "flex-end",

      icon: require("../assets/imges/mobileIcon.svg"),
    },
    {
      name: "Website Development",
      description: <webServices />,
      alt:"Website",
      to:"/websites",
      flex:"flex-start",
      icon: require("../assets/imges/websiteIcon.svg"),
    },
  ];


  const ServeicesItems = (props)=>{
    return(
      <Grid
        className={props.classes.section}
        item
        style={{
          marginTop: "3em",
          margin: "auto"
        }}
        container
        justify={props.item.flex}
        classes={{
          marginLeft: "5em",
          marginTop:"3em",
          root: {
            margin: "auto"

          },
          [theme.breakpoints.down("sm")]: {
            padding: 25,
          },
        }}
      >
        <Grid container direction="row"
          justify={props.item.flex}

        >
          <Grid item>
            <Typography variant="h4" className={props.classes.CustomText}>
              {props.item.name}
            </Typography>
            {props.item.description}
            <Button
              variant="outline"
              component={Link}
              to={props.item.to}
              style={{
                border: "2 solid #0b72b9",
                marginLeft:"3em",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "2em",
                },
              }}
              className={props.classes.learnMore}
            >
              <span
                style={{
                  color: "#0b72b9",
                  fontFamily: "Roboto",
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: 1.9,
                  marginRight: "3px",
                }}
              >
                {" "}
                        Learn more{" "}
              </span>
              <img src={arrowHero} alt="arrow" />
              {/* <arrowHero className={classes.svgButton} /> */}
            </Button>
          </Grid>
          <Grid
            item
            spacing={2}
            style={{ marginLeft: matches ? 0 : "5em" }}
          >
            <img
              src={props.item.icon}
              alt={props.item.alt}
              classes={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: {
                  marginLeft: 0,
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>

    )


  }

  return(
    <Grid direction="column">
      <Grid item>
      <Grid direction="row" container spacing={3}
      style={{marginTop:"3em"}}
      classes={{
    margin:"auto"}  }>
      <Grid item container>
            <Typography style={{
              marginLeft: matches ? "1em": "3em",
              marginTop: matches ? "1em": "2em",

            }} align={matches?"center":undefined} variant="h2"
            gutterBottom
            >Services</Typography>
      </Grid>
      <Grid container item>
        <Container>
              {Services.map((itme,index)=>
                <ServeicesItems
                classes={
                  {
                    marginTop:"3em"
                  }
                }
                key={`item${index}`} classes={classes} item={itme}/>

              )}


        </Container>


      </Grid>
    </Grid>


      </Grid>
    </Grid>
  )}

