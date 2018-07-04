//React
import React from "react"
import PropTypes from "prop-types"

// nodejs library that concatenates classes
import classNames from "classnames"

//Material UI
import withStyles from "@material-ui/core/styles/withStyles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import Button from '../Button'

//Icons
import TuneIcon from '@material-ui/icons/Tune'

//Styles
import drawerPaper from '../Header/style'


const styles = theme => ({
	button: {
	  position: 'fixed',
	},
	icons: {
		width: "17px",
		height: "17px",
		color: "#FFFFFF"
	},
	drawerPaper: drawerPaper
  })


class Filters extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
		filtersOpen: false
	  }

	  this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
	}
  
	handleDrawerToggle() {
	
	  this.setState({ filtersOpen: !this.state.filtersOpen })
	}
  
	render() {
	  const { classes  } = this.props
		
	  return (
		<div>
			<Drawer
				variant="temporary"
				anchor={"right"}
				open={this.state.filtersOpen}
				classes={{ paper: classes.drawerPaper }}
				onClose={this.handleDrawerToggle}>
					{this.props.drawerContent}
			</Drawer>

			<Button className={classes.button} 
					onClick={this.handleDrawerToggle} 
					justIcon round color="primary">
					<TuneIcon className={classes.icons}/>
			</Button>
		</div>
	  )
	}
  }
  
  export default withStyles(styles)(Filters)
  