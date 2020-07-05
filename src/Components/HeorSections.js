import React from 'react'
import { Grid, Typography, Button, useMediaQuery, makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container';

import arrowHero from "../assets/svgs/arrowHero.svg";
import animationData from "../assets/animations/landinganimation/data";

import Lottie from "react-lottie";
import HeroSectionsStyle from '../assets/jss/HeroSectionsStyle';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const  HeroSections = () => {
  const useStyles = makeStyles(HeroSectionsStyle);
  const theme = useTheme();
  const classes = useStyles();
  const textHero=(
    <>
  <Grid sm item container style={{ marginTop: "5em" }}>
      <Typography variant="h2" align="center" className={classes.textHero}>
        Bringing West Coast Technology <br />
        to the Midwest
      </Typography>
      </Grid>
  <Grid item container justify="center" spacing={3}>
        <Grid direction="row">
          <Grid item>
            <Button variant="contained" className={classes.freeEstimate}>
              Free Estimate
          </Button>
          </Grid>
          <Grid item>
            <Button variant="outline" className={classes.learnMore}>
              <span> Learn more </span>
              <img src={arrowHero} alt="arrow" />
              {/* <arrowHero className={classes.svgButton} /> */}
            </Button>
        </Grid>

        </Grid>

      </Grid>
</>
  )

  return (
      <Grid direction="column">
        <Grid item>
          {textHero}
        </Grid>
      <Grid item>
        <Lottie options={defaultOptions}
          classes={{
            maxWidth: "50em",
            minWidth: "21em",
            marginTop: "2em",
            marginLeft: "10%",

          }}
          height="100%" width="100%" />

      </Grid>
</Grid>


  )
}

export default HeroSections;

