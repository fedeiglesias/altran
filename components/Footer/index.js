import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import styles from './styles'

class Footer extends React.Component {
  static getInitialProps({reduxStore, req}) {
    return {}
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Typography className={classes.text}>
          Created by <a href="www.fedeiglesias.com" >Federico Iglesias</a>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
