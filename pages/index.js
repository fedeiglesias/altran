// React
import React from 'react'

// Redux
import {connect} from 'react-redux'

// Actions
import * as actions from '../actions/inhabitantsActions'

// NextJS & MaterialUI
import {withStyles} from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

// Material UI
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

// Own components
import Header from '../components/Header'
import Parallax from '../components/Parallax'
import HeaderLinks from '../components/HeaderLinks'
import Filters from '../components/Filters/index'
import Footer from '../components/Footer/'
import Results from '../components/Results'

// Icons
import FilterIcon from '../static/img/icons/filter.svg'

const styles = theme =>({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
    paddingBottom: 50
  },

  filterButton: {
    position: 'fixed',
    bottom: 20,
    right: 30
  },

  brand: {
  },

  title: {
  },

  parallax: {
    width: '100%',
    backgroundColor: 'black'
  },

  header: {
    backgroundColor: 'black',
    borderBottom: '1px solid rgb(0, 0, 0)',
    boxShadow: 'rgb(0, 0, 0) 0px -2px 11px 2px inset, 0px 0px 3px 1px rgba(255,255,255,0.1)'
  },

  main: {
    maxWidth: 900,
    background: 'rgba(255,255,255, 0.9)',
    boxShadow: (
      'inset 0px 0px 200px 15px rgba(255, 255, 255, 1),'
      + ' 0px 4px 9px 3px rgba(0, 0, 0, 0.5),'
      + ' 0px 0px 20px 0px rgba(0, 0, 0, 0.2)'),
    marginTop: -150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    zIndex: 10,
    width: 'calc(100% - 40px)',
    padding: 10,
    display: 'flex',
    flexWrap: 'nowrap'
  },

  buttonOpenFilters: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 10000
  },

  filtersModal: {
    height: '100%',
    overflowY: 'scroll',
    backgroundColor: 'white'
  },

  buttonFiltersBack: {
    position: 'fixed',
    top: 20,
    right: 35,
    zIndex: 11000
  }
})

// Component
@withStyles(styles)
@withWidth()
class Index extends React.Component {
  static async getInitialProps({reduxStore, req}) {
    const isServer = !!req

    if(isServer){
      await reduxStore.dispatch(actions.getInhabitants())
      let state = {}
      state.state = reduxStore.getState()
      state.dispatch = reduxStore.dispatch
      return state
    }

    // return data
    return {}
  }

  constructor(props) {
    super(props)

    this.state = {openModal: false}

    this.mobileFilters.bind(this)
  }

  componentWillMount() {
    // Get first data
    this.props.dispatch(actions.getInhabitants())
  }

  mobileFilters() {
    const {classes, width} = this.props
    // return if not need it
    if(width !== 'xs') {return}

    return(
      <div>
        <Button
          variant="fab"
          color="primary"
          className={classes.buttonOpenFilters}
          onClick={() => {this.setState({openModal: true}) }}>
          <FilterIcon width={24} height={24}/>
        </Button>
        <Modal aria-labelledby="Titulo" aria-describedby="Descripcion"
          open={this.state.openModal} onClose={this.handleClose} disableAutoFocus={true} >
          <div className={classes.filtersModal}>
            <Button variant="contained" color="primary" className={classes.buttonFiltersBack}
              onClick={() => {this.setState({openModal: false}) }}>Back</Button>
            <Filters />
          </div>
        </Modal>
      </div>
    )
  }

  render() {
    const {classes, width} = this.props;

    return(
      <div className={classes.root} data-id="main-container">

        <Header
          brand="Brastlewark" fixed
          menuButton="left" color="transparent"
          className={classes.header} rightLinks={<HeaderLinks />}
          changeColorOnScroll={{height: 0, color: 'dark'}} />

        <Parallax
          image="./static/img/bg4.png"
          small
          innerShadowBottom
          className={classes.parallax}></Parallax>

        <div className={classes.main}>
          {
            (width === 'xs')
              ? null
              : <Filters className={classes.filterPanel}/>
          }
          {this.mobileFilters()}
          <Results state={this.props.state}/>
        </div>

        <Footer/>
      </div>
    )
  }
}

// State to props
const mapStateToProps = state =>({
  state
})

// Dispatch to Props
const mapDispatchToProps = dispatch =>({
  dispatch
})

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Index)
