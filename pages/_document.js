import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import PropTypes from 'prop-types';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render(){
    const { pageContext } = this.props;
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Brastlewark</title>
          <meta charSet="utf-8" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* App color App */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />

          {/* Google Font load */}
          <link href="https://fonts.googleapis.com/css?family=Exo+2:300,500,600,700,900" rel="stylesheet" />

          {/* Inject CSS styles */}
          <link rel="stylesheet" href="/_next/static/style.css" />

        </Head>
        <body style={{backgroundImage: 'url(static/img/bg.png)'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style id="jss-server-side"
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}/>
        {flush() || null}
      </React.Fragment>
    )
  };
};

export default MyDocument;
