import { createMuiTheme } from "@material-ui/core/styles";
const arcBlue="#0b72b9"
const arcOrange = "#ffba60";


export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    typography: {
      tab: {
        fontFamily: "Raleway",
        fontWeight: "700",
      },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1em",
        fontWeight: "400",
      },

      h3: {
        fontWeight: 400,
      },
    },
    color: {
      white: {
        color: "white",
      },
      green: {
        color: "#009245",
      },
      green2: {
        color: "#39b54a",
      },
      red: {
        color: "#ff0000",
      },
      red2: {
        color: "#d90000",
      },
      white2: {
        color: "#cccccc",
      },
      white3: {
        color: "#b3b3b3",
      },
      yellow: {
        color: "#fcee21",
      },
      pank: {
        color: "#93278f",
      },
    },

    fontType: {
      Roboto: {
        fontFamily: "Roboto",
      },
      Raleway: {
        fontFamily: "Raleway, sans-serif",
      },

      Courier: {
        fontFamily: "Courier Prime, monospace",
      },
    },
  },
});
