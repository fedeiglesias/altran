//React
import React from 'react'

//Redux
import { connect } from 'react-redux'

//NextJS & MaterialUI
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
	},
	text:{
		color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontWeight: 300,
    textShadow: '0px 1px rgba(0,0,0,0.7)',
    "& a": {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
    }
	}
})


//Component
class Footer extends React.Component {
  
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    /**
     * Can use reduxStore.dispatch(action)
     */
    return {}
  }

  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
			  <Typography className={classes.text}>Created by <a href="www.fedeiglesias.com" >Federico Iglesias</a></Typography> 
		  </div>
    )
  }
}



//Add Styles
export default Footer = withStyles(styles)(Footer)