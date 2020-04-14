import React from 'react';
import NextApp, { AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { LocalizeProvider } from 'react-localize-redux';
import ReactDOMServer from 'react-dom/server';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import translations from '@static/translation.json';

import configureStore from '@store/configureStore';

import { NxvMaterialUITheme } from '@utils/nxv-material-ui-themes';

import 'moment/locale/ko';

class MyApp extends NextApp<ReduxWrapperAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>Nexivil Wiki</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
          />
          <meta
            name="description"
            content="Nexivil Wiki for Civil Engineering"
          />
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
          <MuiThemeProvider theme={NxvMaterialUITheme}>
            <CssBaseline />
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </LocalizeProvider>
      </>
    );
  }
}

export default withRedux(configureStore)(MyApp);
