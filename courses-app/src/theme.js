// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C3D90',        // purple hero background
    },
    secondary: {
      main: '#38B48C',        // green “Enroll Now” buttons
      dark: '#2F855A',        // darker hover state
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#F9F9FB',
      paper:   '#F9F9FB',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.2, textTransform: 'uppercase' },
    h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.4 },
    h3: { fontSize: '1.75rem', fontWeight: 500, lineHeight: 1.4 },
    h4: { fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.4 },
    h5: { fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.3 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.4 },
  },
  components: {
    MuiButton: {
      // 1) Global overrides for all Buttons
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 700,
        }
      },
      // 2) Define custom variants
      variants: [
        {
          // <Button variant="type1" />
          props: { variant: 'type1' },
          style: {
            backgroundColor: '#38B48C',
            color: '#FFFFFF',
            padding: '0.75rem 2rem',
            '&:hover': {
              backgroundColor: '#2F855A',
            }
          }
        },
        {
          // <Button variant="type2" />
          props: { variant: 'type2' },
          style: {
            backgroundColor: '#5C3D90',
            color: '#FFFFFF',
            padding: '0.5rem 1.5rem',
            '&:hover': {
              backgroundColor: '#4A2E76',
            }
          }
        }
      ],
      // 3) Optionally, change the default mapping so your "type1" is used when you do `<Button color="secondary">`
      defaultProps: {
        // variant: 'type1' // if you want every <Button> without a `variant` to be `type1`
      }
    }
  }
});

export default theme;
