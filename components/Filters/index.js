// React
import React from 'react'

// Redux
import {connect} from 'react-redux'

// NextJS & MaterialUI
import {withStyles} from '@material-ui/core/styles'

// Material UI
import {Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

// Slider Component
import Nouislider from 'react-nouislider'
import wNumb from 'wnumb'
import '../../static/css/nouislider.css'

// Icons
import FaceIcon from '@material-ui/icons/Face'
import CloseIcon from '@material-ui/icons/Close'
import Profesion from '../../static/img/icons/worker.svg'

// Actions
import * as actionTypes from '../../actions'

// Styles
import styles from './styles'

// Component
class FiltersPanel extends React.Component{
  onAgeChange(value){
    const {dispatch} = this.props
    dispatch({
      type: actionTypes.FILTERS_SET_AGE,
      from: parseInt(value[0]),
      to: parseInt(value[1])
    })
  }

  onHeightChange(value){
    const {dispatch} = this.props
    dispatch({
      type: actionTypes.FILTERS_SET_HEIGHT,
      from: parseFloat(value[0]),
      to: parseFloat(value[1])
    })
  }

  onWeightChange(value){
    const {dispatch} = this.props
    dispatch({
      type: actionTypes.FILTERS_SET_WEIGHT,
      from: parseFloat(value[0]),
      to: parseFloat(value[1])
    })
  }

  onHairChange(value){
    const {dispatch} = this.props
    dispatch({type: actionTypes.FILTERS_SET_HAIR, hair: value})
  }

  onProfessionChange(profession){
    const {dispatch} = this.props
    dispatch({type: actionTypes.FILTERS_SET_PROFESSION, profession: profession})
  }

  renderAgeFilter(){
    const{classes, state} = this.props

    let max = 100
    let min = 0
    let from = min
    let to = max
    if(state.filters.age.max){ max = state.filters.age.max }
    if(state.filters.age.min){ min = state.filters.age.min }
    if(state.filters.age.selectFrom){ from = state.filters.age.selectFrom }
    if(state.filters.age.selectTo){ to = state.filters.age.selectTo }

    return(
      <div className={classes.rangeContainer}>
        <Typography className={classes.rangeLabel}>Age</Typography>

        <Nouislider
          className={classes.range}
          range={{min: min, max: max}}
          start={[from, to]}
          step={1} connect={true}
          format={wNumb({decimals: 0, thousand: '', suffix: ''})}
          tooltips onChange={this.onAgeChange.bind(this)}/>
      </div>
    )
  }

  renderHeightFilter(){
    const{classes, state} = this.props

    let max = 100
    let min = 0
    let from = min
    let to = max
    if(state.filters.height.max){ max = state.filters.height.max }
    if(state.filters.height.min){ min = state.filters.height.min }
    if(state.filters.height.selectFrom){ from = state.filters.height.selectFrom }
    if(state.filters.height.selectTo){ to = state.filters.height.selectTo }

    return(
      <div className={classes.rangeContainer}>
        <Typography className={classes.rangeLabel}>Height</Typography>

        <Nouislider
          className={classes.range}
          range={{min: min, max: max}}
          start={[from, to]}
          step={0.1} connect={true}
          format={wNumb({decimals: 2, thousand: '', suffix: ''})}
          tooltips onChange={this.onHeightChange.bind(this)}/>
      </div>
    )
  }

  renderWeightFilter(){
    const{classes, state} = this.props

    let max = 100
    let min = 0
    let from = min
    let to = max
    if(state.filters.weight.max){ max = state.filters.weight.max }
    if(state.filters.weight.min){ min = state.filters.weight.min }
    if(state.filters.weight.selectFrom){ from = state.filters.weight.selectFrom }
    if(state.filters.weight.selectTo){ to = state.filters.weight.selectTo }

    return(
      <div className={classes.rangeContainer}>
        <Typography className={classes.rangeLabel}>Weight</Typography>

        <Nouislider
          range={{min: min, max: max}}
          start={[from, to]}
          step={0.1} connect={true}
          format={wNumb({decimals: 2, thousand: '', suffix: ''})}
          tooltips onChange={this.onWeightChange.bind(this)}/>
      </div>
    )
  }

  renderProfessionFilter(){
    const{classes, state} = this.props

    // Hide if not filter applied
    if(state.filters.professions.selected !== ''){ return null }

    return(
      <div className={classes.optionFilterContainer}>
        <Typography className={classes.optionFilterSubtitle}>Professions</Typography>
        {
          state.filters.professions.options.map(item =>
            <Typography
              onClick={() => this.onProfessionChange(item)}
              className={classes.optionFilterItem}
              key={item}>{item}</Typography>
          )
        }
      </div>
    )
  }

  renderHairFilter(){
    const{classes, state} = this.props

    if(state.filters.hair.selected !== ''){ return }

    return(
      <div className={classes.optionFilterContainer}>
        <Typography className={classes.optionFilterSubtitle}>Hair Color</Typography>
        {
          state.filters.hair.options.map(item =>
            <Typography
              onClick={() => this.onHairChange(item)}
              className={classes.optionFilterItem}
              key={item}>
              {item}
            </Typography>)
        }
      </div>
    )
  }

  renderHairSelected(){
    const{classes, state} = this.props
    if(state.filters.hair.selected === ''){ return null }
    return <Chip
      avatar={<Avatar className={classes.avatar}><FaceIcon /></Avatar>}
      label={'Hair: ' + state.filters.hair.selected}
      deleteIcon={<CloseIcon />}
      onClick={() =>{ this.onHairChange('') }}
      onDelete={() =>{ this.onHairChange('') }}
      className={classes.chip}
      classes={{root: classes.chipRoot, label: classes.chipLabel} }/>
  }

  renderProfessionSelected(){
    const{classes, state} = this.props
    // Hide if filter applied

    if(state.filters.professions.selected === ''){ return true }
    return <Chip
      avatar={<Avatar className={classes.avatar}><Profesion fill="rgba(0,0,0,0.5)"/></Avatar>}
      label={state.filters.professions.selected}
      deleteIcon={<CloseIcon />}
      onClick={() =>{ this.onProfessionChange('') }}
      onDelete={() =>{ this.onProfessionChange('') }}
      className={classes.chip}
      classes={{root: classes.chipRoot, label: classes.chipLabel} }/>
  }

  render(){
    const {classes, state} = this.props
    return(
      <div className={classes.root}>
        <Typography variant="title" className={classes.title}>
          {
            (state.filters.name === '')
              ? 'Search Filters'
              : state.filters.name.charAt(0).toUpperCase() + state.filters.name.slice(1)
          }
        </Typography>

        <Typography variant="button" className={classes.results}>
          {
            state.inhabitants.display
              ? state.inhabitants.display.length + ' RESULTS'
              : state.inhabitants.items.length + ' RESULTS'
          }
        </Typography>

        <div className={classes.filtersAppliedContainer}>
          {this.renderHairSelected()}
          {this.renderProfessionSelected()}
        </div>

        <div className={classes.filter}>
          {this.renderAgeFilter()}
          {this.renderHeightFilter()}
          {this.renderWeightFilter()}
          {this.renderProfessionFilter()}
          {this.renderHairFilter()}
        </div>
      </div>
    )
  }
}

// Connect everything
export default withStyles(styles)(FiltersPanel)
