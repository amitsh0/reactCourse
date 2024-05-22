import { createTheme } from "@mui/material";


export const muiTheme = createTheme({

    //Color theme
    palette: {
        primary: {
            main: "#493A7F"
        },
        secondary: {
            main: "#FA0"
        }
    },

    //Writing theme
    typography: {
        allVariants: {
            fontFamily: "Jost",
            fontSize: 20
        }
    },

    // Components theme
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: 14,
                    transform: "rotate(-10deg)"
                }
            }
        }
    }
});