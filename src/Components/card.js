import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "./Ui/theme";
import arrowHero from "../../assets/svgs/arrowHero.svg";
import repeatingBackground from "../../assets/imges/repeatingBackground.svg";

import CardStyle from "../assets/jss/CardStyle";

function cardComponent(classes) {
  return (
    <Grid
      container
      justify="center"
      style={{
        height: "100em",
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
      }}
    >
      <Card>
        <CardContent>
          <Grid container direction="column">
            <Grid item justify="center">
              <Typography variant="h3">The Revolution</Typography>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
              <Typography variant="subtitle">The Revolution</Typography>
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
          </Grid>
        </CardContent>
      </Card>
      <div
        classes={{
          backgroundImage: `url(${repeatingBackground})no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      />
    </Grid>
  );
}
export default cardComponent;




