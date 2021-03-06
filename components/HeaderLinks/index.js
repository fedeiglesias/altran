import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import LinkedIn from '../../static/img/social/linkedin-logo.svg';
import GitHub from '../../static/img/social/github2.svg';

// core components
import Button from '../Button';

import headerLinksStyle from './style';

function HeaderLinks({...props}) {
  const {classes} = props;
  let windowAlt = 0;
  if (typeof (window) !== 'undefined') {
    windowAlt = window;
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Add me in LinkedIn'
          placement={windowAlt.innerWidth > 959 ? 'top' : 'left'}>

          <Button
            href='http://www.github.com/fedeiglesiasc'
            target='_blank'
            color='transparent'
            className={classes.navLink}>
            <LinkedIn className={classes.icons}/>
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='See this projec in Github'
          placement={windowAlt.innerWidth > 959 ? 'top' : 'left'}>

          <Button
            href='http://www.github.com/fedeiglesiasc'
            target='_blank'
            color='transparent'
            className={classes.navLink}>
            <GitHub className={classes.icons}/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
