import React from 'react';
import {connect} from 'react-redux';
import * as searchActions from '../../actions/searchActions';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

class MainBar extends React.Component {
  static getInitialProps({reduxStore, req}){
    return {};
  }

  constructor(props){
    super(props);

    this.input = React.createRef();
    this.typingTimer = null;
    this.state = {
      hover: false,
      typing: false,
      active: false,
      value: ''
    };
  }

  onChange(){
    this.setState({value: this.input.current.value});
  }

  onKeyUp(){
    this.setState({typing: true});
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(this.doneTyping.bind(this), 300);
  }

  doneTyping(){
    this.setState({typing: false});
    this.props.dispatch(searchActions.search(this.state.value));
  }

  onFocus(){
    this.setState({active: true});
  }

  onBlur(){
    this.setState({active: false});
  }

  renderLoading(){
    const {classes} = this.props;

    if(!this.state.typing){return null}

    return <CircularProgress
      className={classes.progress}
      classes={{svg: classes.svg}}
      color="inherit" />;
  }

  render(){
    const {classes} = this.props;
    return (
      <div className={(this.state.active) ? classes.rootActive : classes.root }>
        <SearchIcon className={(this.state.active) ? classes.iconActive : classes.icon }/>
        <input
          type="text"
          ref={this.input}
          className={classes.searchInput}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}/>
        {this.renderLoading()}
      </div>
    );
  }
}


// Connect everything
export default withStyles(styles)(MainBar);
