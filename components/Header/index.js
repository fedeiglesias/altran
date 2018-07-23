import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

// Icons
import Menu from '@material-ui/icons/Menu';

// Components
import style from './style';

// Own components
import Search from '../Search/';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {mobileOpen: false};
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }

  handleDrawerToggle(){
    this.setState({mobileOpen: !this.state.mobileOpen});
  }

  componentDidMount(){
    if(this.props.changeColorOnScroll){
      window.addEventListener('scroll', this.headerColorChange);
    }
  }

  headerColorChange(){
    const {classes, color, changeColorOnScroll} = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height){
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }

  componentWillUnmount(){
    if (this.props.changeColorOnScroll){
      window.removeEventListener('scroll', this.headerColorChange);
    }
  }

  renderMenuIcon(){
    return (
      <Hidden mdUp>
        <IconButton color="inherit" aria-label="open drawer"
          onClick={this.handleDrawerToggle}><Menu/>
        </IconButton>
      </Hidden>
    );
  }

  render(){
    const {classes, color, rightLinks, leftLinks, brand, fixed, absolute} = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = (
      <Button className={classes.title}>
        {brand}
      </Button>
    );

    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {
            (this.props.menuButton === 'left')
              ? this.renderMenuIcon()
              : null
          }

          {
            leftLinks !== undefined
              ? brandComponent
              : null
          }

          <div className={classes.flex}>
            {
              leftLinks !== undefined
                ? (<Hidden smDown implementation="css">{leftLinks}</Hidden>)
                : (brandComponent)
            }
          </div>

          <Search
            state={this.props.state}
            dispatch={this.props.dispatch}/>

          <Hidden smDown implementation="css">{rightLinks}</Hidden>
          {
            (this.props.menuButton === 'right')
              ? this.renderMenuIcon()
              : null
          }

        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}>
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: 'white',
  menuButton: 'left'
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark']),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  menuButton: PropTypes.oneOf(['left', 'right', 'none']).isRequired,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    // color: PropTypes.string,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark']).isRequired,
    alpha: PropTypes.string
  })
};

export default withStyles(style)(Header);
