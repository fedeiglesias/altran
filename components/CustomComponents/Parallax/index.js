//React
import React from "react"
import PropTypes from "prop-types"

//Material UI
import withStyles from "@material-ui/core/styles/withStyles"

//Utilities
import classNames from "classnames"

//Styles
import parallaxStyle from "./style"


class Parallax extends React.Component {
  
  //If code run in server window is not available
  fromBrowser = (typeof(window) == 'undefined') ? false : true

  constructor(props) {
    super(props)
    
    var windowScrollTop = 0
	  if(this.fromBrowser) windowScrollTop = window.pageYOffset / 3
    
    this.state = {transform: "translate3d(0," + windowScrollTop + "px,0)"}
    this.resetTransform = this.resetTransform.bind(this)
  }

  componentDidMount() {
    var windowScrollTop = 0
	  if(this.fromBrowser) windowScrollTop = window.pageYOffset / 3

    this.setState({transform: "translate3d(0," + windowScrollTop + "px,0)"})
    
    //If are running in Client
	  if(this.fromBrowser) window.addEventListener("scroll", this.resetTransform)
  }

  componentWillUnmount() {
    //If are running in Client
    if(this.fromBrowser) window.removeEventListener("scroll", this.resetTransform)
  }

  resetTransform() {
    var windowScrollTop = 0
    if(this.fromBrowser) windowScrollTop = window.pageYOffset / 3

    this.setState({transform: "translate3d(0," + windowScrollTop + "px,0)"})
  }
  render() {
    const { classes,filter,className,children,image,small, innerShadowBottom, innerShadowTop } = this.props

    //JSS
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
      [classes.innerShadowBottom]: innerShadowBottom,
      [classes.innerShadowTop]: innerShadowTop,
    })

    return (
      <div
        className={parallaxClasses}
        style={{  ...{},
                  backgroundImage: "url(" + image + ")",
                  ...this.state
        }}
        ref="parallax">
        {children}
      </div>
    )
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  innerShadowBottom: PropTypes.bool,
  innerShadowTop: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  image: PropTypes.string
}

export default withStyles(parallaxStyle)(Parallax)
