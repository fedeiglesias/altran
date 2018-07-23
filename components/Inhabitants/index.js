// React
import React from 'react';

// Redux
import {connect} from 'react-redux';

// NextJS & MaterialUI
import {withStyles} from '@material-ui/core/styles';

// Material UI
import Card from '@material-ui/core/Card';
import {Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

// Icons
import ToolsIcon from '../../static/img/icons/worker_construction.svg';
import FriendsIcon from '../../static/img/icons/friends.svg';
import IdentifyIcon from '../../static/img/icons/info.svg';
import FaceIcon from '@material-ui/icons/Face';

// Styles
import styles from './styles';

class Inhabitants extends React.Component {
  static getInitialProps({reduxStore, req}) {
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      tab: 1
    };

    this.renderProfession.bind(this);
    this.renderProfile.bind(this);
    this.renderFriends.bind(this);
  }

  onMouseOver(){
    this.setState({hover: true});
  }

  onMouseOut(){
    this.setState({hover: false});
  }

  onTabClick(tab) {
    this.setState({tab: tab});
  }

  renderProfile(){
    if(this.state.tab !== 1){ return }

    const {classes, data} = this.props;

    return (
      <div className={classes.generalInfo}>
        <Typography className={classes.data}>
          <b className={classes.dataLabel}>Age</b> {data.age}
        </Typography>
        <Typography className={classes.data}>
          <b className={classes.dataLabel}>Weight</b> {data.weight ? data.weight.toFixed(1) : ''}
        </Typography>
        <Typography className={classes.data}>
          <b className={classes.dataLabel}>Height</b> {data.height ? data.height.toFixed(1) : ''}
        </Typography>
        <Typography className={classes.data}>
          <b className={classes.dataLabel}>Hair</b> {data.hair_color}
        </Typography>
      </div>
    );
  }

  renderProfession(){
    if(this.state.tab !== 2){ return }

    const {classes, data} = this.props;
    if(!data.professions.length){ return null }

    return (
      <div className={classes.professionsContainer}>
        {data.professions.map((item, i) =>
          <Typography className={classes.professionsData} key={i}>
            {item}
          </Typography>)}
      </div>
    );
  }

  renderFriends(){
    if (this.state.tab !== 3){ return }

    const {classes, data} = this.props;
    if(!data.friends.length){ return null }

    return (
      <div className={classes.friendsContainer}>
        {data.friends.map((item, i) =>
          <div className={classes.customChip} key={i}>
            <Avatar className={classes.customChipAvatar}>
              <FaceIcon className={classes.customChipAvatarIcon}/>
            </Avatar>
            <Typography className={classes.customChipLabel}>{item}</Typography>
          </div>
        )}
      </div>
    );
  }

  render(){
    const {classes, data} = this.props;

    return (
      <Card
        data-id="item"
        className={classes.root}
        elevation={this.state.hover ? 10 : 1}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}>
        <div className={classes.image} style={{backgroundImage: 'url(' + data.thumbnail + ')'}}>
          <Typography className={classes.name}>{data.name}</Typography>
        </div>

        <div className={classes.menu}>
          <div onClick={() => { this.onTabClick(1) }}
            className={ (this.state.tab === 1) ? classes.menuButtonActive : classes.menuButton}>
            <IdentifyIcon className={classes.menuIcon} />
            <Typography className={classes.menuLabel}>Profile</Typography>
          </div>
          <div onClick={() => { this.onTabClick(2) }}
            className={ (this.state.tab === 2) ? classes.menuButtonActive : classes.menuButton}>
            <ToolsIcon className={classes.menuIcon}/>
            <Typography className={classes.menuLabel}>Work</Typography>
          </div>
          <div onClick={() => { this.onTabClick(3) }}
            className={ (this.state.tab === 3) ? classes.menuButtonActive : classes.menuButton}>
            <FriendsIcon className={classes.menuIcon}/>
            <Typography className={classes.menuLabel}>Friends</Typography>
          </div>
        </div>

        <div className={classes.tabContainer}>
          {this.renderProfile()}
          {this.renderProfession()}
          {this.renderFriends()}
        </div>
      </Card>
    );
  }
}

// Connect everything
export default withStyles(styles)(Inhabitants);
