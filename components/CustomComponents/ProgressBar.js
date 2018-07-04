//React
import React from 'react'

//Redux
import { connect } from 'react-redux'

//NextJS & MaterialUI
import withRoot from '../../lib/withRoot'
import { withStyles } from '@material-ui/core/styles'


//Component
class ProgressBar extends React.Component {
  
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    return {}
  }


  defaultProps = {
    className: '',
    color: '#03A9F4',
    height: 2,
    hideDelay: .4,
    percent: 0,
    speed: .4,
    style: {},
    backgroundColor: 'rgba(150,150,150,0.9)',
  }


  render(){
    //console.log(this.props)
    const { classes } = this.props
    
    if(!this.props.percent) return null
    
    //Add default props
    const properties = { ...this.defaultProps, ...this.props}

    //Variable css
    const container = {
      zIndex: 2000,
      opacity: properties.percent < 100 ? 1 : 0,
      WebkitTransition: `${properties.speed}s opacity`,
      transition: `${properties.speed}s opacity`,
      WebkitTransitionDelay: `${properties.percent < 100 ? 0 : properties.hideDelay}s`,
      transitionDelay: `${properties.percent < 100 ? 0 : properties.hideDelay}s`,
      width: '100%',
      height: 2,
      position: 'fixed',
      top: 0,
    }

    const barStyle = {
      display: 'inline-block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${properties.percent}%`,
      maxWidth: '100% !important',
      height: properties.height,
      boxShadow: 'inset rgba(31, 150, 255, 0.6) 0px 0px 0px 1px, rgb(1, 79, 255) 0px 0px 2px 1px',
      backgroundColor: 'rgb(9, 144, 255)',
      WebkitTransition: `${properties.speed}s width, ${properties.speed}s background-color`,
      transition: `${properties.speed}s width, ${properties.speed}s background-color`,
      ...this.props.style
    }


    const pointerStyle = {
      float: 'right',
      width: 3,
      borderRadius: 2,
      backgroundColor: 'rgba(250, 254, 255, 0.6)',
      height: 2,
      boxShadow: 'rgba(124, 243, 255, 0.66) 0px 0px 1px 1px',
    }

    return (
      <div style={container}>
        <div style={barStyle}>
          <div style={pointerStyle}></div>
        </div>
      </div>
    )
  }
}


//Add Styles
export default withRoot(ProgressBar)