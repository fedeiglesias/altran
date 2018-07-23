import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#21d6ff',
      main: '#00b9e6',
      dark: '#00aad1'
    },
    secondary: {
      light: '#21d6ff',
      main: '#00b9e6',
      dark: '#00aad1'
    }
  },
  typography: {
    fontFamily: '"Exo 2", sans-serif'
  }
})

function createPageContext(){
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext(){
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if(!process.browser){
    return createPageContext();
  }

  // Reuse context on the client-side.
  if(!global.__INIT_MATERIAL_UI__){
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
