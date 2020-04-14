import React from 'react';
import NextApp, { AppContext } from 'next/app';
import Head from 'next/head';
// import { Provider } from 'react-redux';
// import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { LocalizeProvider } from 'react-localize-redux';
import ReactDOMServer from 'react-dom/server';

import { ThemeProvider } from 'styled-components';

import translations from '@static/translation.json';

// import configureStore from '@store/configureStore';

import { PaninoTheme } from '@utils/styled-theme';

import 'moment/locale/ko';

// class MyApp extends NextApp<ReduxWrapperAppProps> {
class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    // const { Component, pageProps, store } = this.props;
    const { Component, pageProps } = this.props;
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
          {/* <Provider store={store}> */}
          <ThemeProvider theme={PaninoTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
          {/* </Provider> */}
        </LocalizeProvider>
      </>
    );
  }
}

// export default withRedux(configureStore)(MyApp);
export default MyApp;
