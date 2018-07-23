import React from 'react'
import App, { Container } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import JssProvider from 'react-jss/lib/JssProvider'
import {JssProvider, jss} from 'react-jss'
import getPageContext from '../lib/getPageContext'
import { Provider } from 'react-redux'
import withRedux from '../lib/withRedux'

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  pageContext = null;

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles && jssStyles.parentNode){
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(){
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>

        <JssProvider
          jss={jss}
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}>

          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}>

            <CssBaseline />

            <Provider store={reduxStore}>
              <Component
                pageContext={this.pageContext}
                {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default withRedux(MyApp)
