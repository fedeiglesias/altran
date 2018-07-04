//React
import React from 'react'

//Redux
import { connect } from 'react-redux'

//Actions
import * as searchActions from '../actions/searchActions'

//NextJS & MaterialUI
import { withStyles } from '@material-ui/core/styles'

//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

//Icons
import SearchIcon from '@material-ui/icons/Search'


const styles = theme => ({
	root:{
		flex: 2,
		maxWidth: 200,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.3)',
		borderRadius: 3,
		height: 40,
		transition: 'all 0.3s ease',
		cursor: 'pointer',
		'&:hover':{
		  backgroundColor: 'rgba(255,255,255,0.5)',
		}
	  },
	
	  rootActive:{
			extend: 'root',
			maxWidth: '300px'
	  },

	  searchInput: {
			fontSize: 14,
			fontFamily: '"Exo 2", sans-serif',
			fontWeight: 200,
			background: 'transparent',
			border: 0,
			width: '100%',
			color: 'white',
			height: '100%',
			paddingLeft: 5,
			paddingRight: 20,
			outline: 0,
			cursor: 'pointer'
	  },

	  icon: {
			margin: 10,
			marginTop: 11,
		  opacity: 0.7,
		  transition: 'all 0.3s ease'
	  },

	  iconActive: {
			extend: 'icon',
			opacity: 1,
		},

		progress: {
			maxHeight: 20,
			maxWidth: 20,
			margin: theme.spacing.unit * 2,
		},

		svg: {
			width: 20,
			height: 20,
		}
})


//Component
class MainBar extends React.Component {
  
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    /**
     * Can use reduxStore.dispatch(action)
     */
    return {}
  }

  constructor(props) {
		super(props)
		
    //binds
		this.onKeyUp.bind(this)
		this.onFocus.bind(this)
		this.onBlur.bind(this)
		this.input = React.createRef()
  }

  state = { 
		hover: false,
		typing: false,
		active: false,
		value: '',
  }

  typingTimer = null

	onChange = () => {
		this.setState({value: this.input.current.value})
	}

  onKeyUp = () => {
		this.setState({typing: true})
		clearTimeout(this.typingTimer)
		this.typingTimer = setTimeout(this.doneTyping.bind(this), 1500)
  }

  doneTyping = () => {
		this.setState({typing: false})
		this.props.dispatch( searchActions.search(this.state.value))
  }

  onFocus = () => {
		this.setState({active: true})
  }

  onBlur = () => {
		this.setState({active: false})
  }

  render(){
    const { classes, data } = this.props
    return (
		<div className={(this.state.active) ? classes.rootActive : classes.root }>
			<SearchIcon className={(this.state.active) ? classes.iconActive : classes.icon }/>
			<input type="text" className={classes.searchInput}
				ref={this.input}
				onChange={this.onChange}
				onKeyUp={this.onKeyUp}
				onFocus={this.onFocus}
				onBlur={this.onBlur}/>
				{this.state.typing ? <CircularProgress className={classes.progress} color="inherit" classes={{svg: classes.svg}}/> : ''}
		</div>
    )
  }
}

//State to props
const mapStateToProps = state => ({
  state
})

//Dispatch to Props
const mapDispatchToProps = dispatch => ({
  dispatch
})

//Add Styles
MainBar = withStyles(styles)(MainBar)

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(MainBar)

