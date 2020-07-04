import * as React from "react";
import Lottie from "react-lottie";
import LoadingStyle from "../../assets/jss/Loadingpage";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useTheme,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import animationData from "../../assets/animations/landinganimation/data";
import theme from "../Ui/theme";
import arrowHero from "../../assets/svgs/arrowHero.svg";
import customeSoftwareIcon from "../../assets/imges/Custom Software Icon.svg";
import MobileIcon from "../../assets/imges/mobileIcon.svg";

const LoadingPage = () => {
  const useStyles = makeStyles(LoadingStyle);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const TextHeroSections = (
    <Grid sm item container style={{ marginTop: "5em" }}>
      <Typography variant="h2" align="center" className={classes.textHero}>
        Bringing West Coast Technology <br />
        to the Midwest
      </Typography>
      <Grid container justify="center" spacing={3}>
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
  );

  const renderRight = (
    <Lottie options={defaultOptions} height="50%" width="50%" />
  );

  const CustomSoftware = (
    <Typography
      variant="subtitle1"
      className={classes.mysubtitle}
      style={{
        color: "#868686",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 24,
      }}
    >
      Save Energy. Save Time. Save Money.
      <br /> Complete digital solutions, from investigation
      <br /> to{" "}
      <span
        style={{
          color: "#ffba60",
          fontFamily: "Pacifico",
          fontSize: 24,
          fontWeight: 400,
          padding: 10,
        }}
      >
        {" "}
        celebration.
      </span>
    </Typography>
  );

  const MobileServicess = (
    <Typography
      variant="subtitle1"
      className={classes.mysubtitle}
      style={{
        color: "#868686",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 24,
      }}
    >
      Extend Functionality. Extend Access. Increase Engagement.
      <br />
      Integrate your web experience or create a standalone app
      <br />
      with either mobile platform.
    </Typography>
  );
  const webServicess = (
    <Typography
      variant="subtitle1"
      className={classes.mysubtitle}
      style={{
        color: "#868686",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 24,
      }}
    >
      Reach More. Discover More. Sell more.
      <br />
      Optimized for Search Engines,
      <br />
      built for speed.
    </Typography>
  );
  const servicess = [
    {
      name: "Custom Software Development",
      description: CustomSoftware,
      icon: require("../../assets/imges/Custom Software Icon.svg"),
    },
    {
      name: "iOS/Android App Development",
      description: MobileServicess,
      icon: require("../../assets/imges/mobileIcon.svg"),
    },
    {
      name: "Website Development",
      description: webServicess,
      icon: require("../../assets/imges/websiteIcon.svg"),
    },
  ];

  return (
    <Grid container direction="column" className={classes.hearo}>
      <Grid item sm className="leftWrapper">
        {TextHeroSections}
      </Grid>
      <Grid item sm justify="flex-end">
        {/* {renderRight} */}
      </Grid>
      <Grid direction="row" container style={{ marginTop: "3em" }}>
        {servicess.map((item, index) => (
          <Grid
            className={classes.section}
            item
            container
            justify={index % 2 === 0 ? "flex-start" : "flex-end"}
            classes={{
              marginLeft: "5em",
              [theme.breakpoints.down("sm")]: {
                padding: 25,
              },
            }}
          >
            <Grid container direction="row">
              <Grid item>
                <Typography variant="h4" className={classes.CustomText}>
                  {item.name}
                </Typography>
                {item.description}
                <Button
                  variant="outline"
                  style={{
                    border: "2 solid #0b72b9",
                    [theme.breakpoints.down("sm")]: {
                      marginBottom: "2em",
                    },
                  }}
                  className={classes.learnMore}
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
                  src={item.icon}
                  alt="custome"
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
        ))}
      </Grid>
    </Grid>
  );
};
export default LoadingPage;
