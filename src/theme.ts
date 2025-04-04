import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontSize: 12,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
        },
    },
    palette: {
        primary: {
            main: '#4A90E2',
            "100": '#D0E6F6',
            "200": '#A3CFF3',
            "300": '#6BA8E6'
        },
        secondary: {
            main: '#50E3C2',
            "100": '#CFF7ED',
            "200": '#9FEBD9',
            "300": '#5EDCC4'
        },
        background: {
            paper: '#F7F9FC'
        },
        text: {
            primary: '#4A4A4A',
            secondary: '#7F8C8D'
        }
    },
});