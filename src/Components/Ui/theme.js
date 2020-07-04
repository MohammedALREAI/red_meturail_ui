import { createMuiTheme } from "@material-ui/core/styles";
const arcBlue="#0b72b9"
const arcOrange = "#ffba60";


const theme =createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
        white: "white",

        green: "#009245",
        green2: "#39b54a",

        red: "#ff0000",
        red2: "#d90000",
      white2:"#cccccc",

      white3: "#b3b3b3",

      yellow:"#fcee21",
        pank: "#93278f",


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
    },}
});

export default theme;
