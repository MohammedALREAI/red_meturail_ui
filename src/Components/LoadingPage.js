import * as React from "react";
import LoadingStyle from "../assets/jss/Loadingpage";
import {
  makeStyles,
  Grid,
} from "@material-ui/core";
import theme from "./Ui/theme";
import Container from '@material-ui/core/Container';

import { Servicers } from "./Servicess";
import HeroSections from "./HeorSections";

const LoadingPage = () => {
  const useStyles = makeStyles(LoadingStyle);
  const classes = useStyles();

  return (
<Grid direction="row">
  <Grid item>
<HeroSections/>
  </Grid>
  <Grid item>
          <Servicers />
        </Grid>

</Grid>




  );
};
export default LoadingPage;
