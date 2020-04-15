import React from 'react';
import NextApp, { AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { LocalizeProvider } from 'react-localize-redux';
import ReactDOMServer from 'react-dom/server';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';

import { CssBaseline, StylesProvider } from '@material-ui/core';

import translations from '@static/translation.json';
import configureStore from '@store/configureStore';
import { paninoTheme } from '@styles/theme';
import initFirebase from '@utils/auth/initFirebase';

import 'moment/locale/ko';

initFirebase();

class MyApp extends NextApp<ReduxWrapperAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>PANINO</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
          />
          <meta name="description" content="MAKE IT YOUR OWN" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <LocalizeProvider
          initialize={{
            languages: [
              { name: '한국어', code: 'ko' },
              { name: 'English', code: 'en' },
            ],
            translation: translations,
            options: {
              defaultLanguage: 'ko',
              renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup,
            },
          }}
        >
          <Provider store={store}>
            <StylesProvider injectFirst>
              <StyledThemeProvider theme={paninoTheme}>
                <MaterialThemeProvider theme={paninoTheme}>
                  <CssBaseline />
                  <Component {...pageProps} />
                </MaterialThemeProvider>
              </StyledThemeProvider>
            </StylesProvider>
          </Provider>
        </LocalizeProvider>
      </>
    );
  }
}

export default withRedux(configureStore)(MyApp);
