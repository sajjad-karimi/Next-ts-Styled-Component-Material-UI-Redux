import { faIR } from '@material-ui/core/locale';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme(
  {
    direction: 'rtl',
    spacing: 5,
    overrides: {
      MuiInputBase: {
        root: {
          background: '#161D34',
        },
        input: {
          color: 'white',
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: '#313544',
        },
      },
    },
    typography: {
      fontFamily: 'iranyekan',
      // allVariants: {
      //   color: 'white',
      // },
      h1: {
        fontSize: '2.75rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '2.4rem',
      },
      h6: {
        fontSize: '1.5rem',
      },
      subtitle1: {
        fontSize: '1.25rem',
      },
      subtitle2: {
        fontSize: '1rem',
        color: '#F7BE02',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: '2rem',
      },
      body2: {
        fontSize: '0.85rem',
        lineHeight: '2rem',
      },
    },
    palette: {
      primary: {
        main: '#4150ff',
      },
      secondary: {
        main: '#ff3c4e',
      },
      divider: '#545454',
    },
  },
  faIR
);
theme = responsiveFontSizes(theme);
// theme.typography.body1 = {
//   fontSize: "1rem",
//   fontFamily: "iranyekan",
//   color: "white",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "0.9rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.85rem",
//   },
// };

export default theme;
