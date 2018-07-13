// React
import React from 'react'

// NextJS & MaterialUI
import {withStyles} from '@material-ui/core/styles'

// Action Types
import * as at from '../actions'

// Own components
import Inhabitants from './Inhabitants'

// Styles
const styles = theme => ({
  root: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },

  item: {
    '@media (min-width: 870px)': {
      maxWidth: 'calc(100% * (1/2) - 14px - 1px)'
    }
  }
})

@withStyles(styles)
export default class Results extends React.Component {
  constructor(props) {
    super(props)

    this.componentDidMount.bind(this)
    this.matchAge.bind(this)
    this.matchWeight.bind(this)
    this.matchHeight.bind(this)
    this.matchHair.bind(this)
    this.loadMore.bind(this)
  }

  componentDidMount(){
    if(window){ window.addEventListener('scroll', this.loadMore) }
  }

  componentWillUnmountcomponentDidMount(){
    if(window){ window.removeEventListener('scroll', this.loadMore) }
  }

  loadMore = (e) => {
    if((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight){
      this.props.dispatch({type: at.INHABITANTS_ONE_MORE_PAGE})
    }
  }

  matchAge = (age) => {
    let from = this.props.state.filters.age.selectFrom
    let to = this.props.state.filters.age.selectTo
    if((age >= from) && (age <= to)){ return true }
    else{ return false }
  }

  matchWeight = (weight) => {
    let from = this.props.state.filters.weight.selectFrom
    let to = this.props.state.filters.weight.selectTo
    if((weight >= from) && (weight <= to)){ return true }
    else{ return false }
  }

  matchHeight = (height) => {
    let from = this.props.state.filters.height.selectFrom
    let to = this.props.state.filters.height.selectTo
    if((height >= from) && (height <= to)){ return true }
    else{ return false }
  }

  matchHair = (hair) => {
    let hairSelected = this.props.state.filters.hair.selected
    if (hairSelected === ''){ return true }

    if (hair === hairSelected){ return true }

    return false
  }

  matchProfession = (professions) => {
    let professionSelected = this.props.state.filters.professions.selected
    // If no profession selected return true
    if (professionSelected === ''){ return true }

    // If profession selected and match return true
    for (var i in professions){
      if (professionSelected === professions[i]){
        return true
      }
    }

    // else
    return false
  }

  renderItems(){
    const {state, classes} = this.props
    const items = state.inhabitants.display

    // Paginate
    let ret = []
    let cont = 0
    for(let i in items) {
      if(cont >= (state.inhabitants.page * 9)){
        break
      }

      if(this.matchAge(items[i].age) &&
      this.matchHeight(items[i].height) &&
      this.matchWeight(items[i].weight) &&
      this.matchHair(items[i].hair_color) &&
      this.matchProfession(items[i].professions)) {
        ret.push(<Inhabitants key={items[i].id} data={items[i]} className={classes.item}/>)
        cont++
      }
    }

    return ret
  }

  render(){
    const {classes} = this.props

    return (
      <div className={classes.root}>
        { this.renderItems() }
      </div>
    )
  }
}
