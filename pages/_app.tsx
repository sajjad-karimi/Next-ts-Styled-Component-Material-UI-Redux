import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';

import theme from '../src/theme';
import { useStore } from '../src/store/configureStore';

import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: process.browser
    ? document.getElementById('jss-insertion-point') || ''
    : 'jss-insertion-point',
});

function RTL(props: any) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentNode?.removeChild(jssStyles);
  });

  return (
    <Provider store={store}>
      <RTL>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </RTL>
    </Provider>
  );
};

export default MyApp;
