import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

// Material UI
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

// Icons
import FilterIcon from '../../static/img/icons/filter.svg'

// Own components
import Parallax from '../../components/Parallax';
import Header from '../../components/Header';
import HeaderLinks from '../../components/HeaderLinks';
import Footer from '../../components/Footer';
import styles from './styles'
import Filters from '../../components/Filters/index'
import Results from '../../components/Results'

import MediaQuery from 'react-responsive';
import * as actions from '../../actions/inhabitantsActions';

export class Catalog extends React.Component {

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
    const { classes } = this.props

    return(
      <MediaQuery maxWidth={600} component="div">
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
            <Filters state={this.props.state} dispatch={this.props.dispatch}/>
          </div>
        </Modal>
      </MediaQuery>
    )
  }

  desktopFilters() {
    const { classes } = this.props

    return(
      <MediaQuery minWidth={600} component="div">
        <Filters
          state={this.props.state}
          dispatch={this.props.dispatch}
          className={classes.filterPanel}/>
      </MediaQuery>
    )
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>

        <Header
          brand="Brastlewark" fixed
          menuButton="left" color="transparent"
          className={classes.header} rightLinks={<HeaderLinks />}
          changeColorOnScroll={{height: 0, color: 'dark'}}
          state={this.props.state}
          dispatch={this.props.dispatch}/>

        <Parallax
          image="./static/img/bg4.jpg"
          small
          innerShadowBottom
          className={classes.parallax}></Parallax>

        <div className={classes.main}>
          {this.mobileFilters()}
          {this.desktopFilters()}
          <Results state={this.props.state} dispatch={this.props.dispatch}/>
        </div>

        <Footer/>
      </div>
    )
  }
}

// For Jest Testing


// State to props
const mapStateToProps = state =>({
  state
})

// Dispatch to Props
const mapDispatchToProps = dispatch =>({
  dispatch
})

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Catalog))


