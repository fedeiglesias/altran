export default (theme) => ({
  root: {
    minWidth: 180,
    flexGrow: 1,
    flexBasis: 0,
    margin: 7,
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    flex: 'flex',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },

  image: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
    height: 150,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  name: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    background: 'rgba(0,0,0,0.5)',
    padding: 5,
    fontWeight: 'light',
    color: 'white',
    width: '100%',
    fontSize: 15
  },

  generalInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  data: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 300,
    padding: 5
  },

  dataLabel: {
    color: 'rgba(0,0,0,0.8)',
    fontWeight: 'semibold',
    fontSize: 10,
    textTransform: 'uppercase'
  },

  professionsTitle: {
    color: 'rgba(0,0,0,0.8)',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 7,
    textTransform: 'uppercase'
  },

  professionsContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  professionsData: {
    flexWrap: 'nowrap',
    height: 28,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    padding: '2px 7px',
    border: '1px solid #d2d2d2',
    fontSize: 13,
    fontWeight: 300,
    margin: 3.5
  },

  menu: {
    flex: 1,
    display: 'flex',
    flexWrap: 'nowrap',
    maxWidth: '100%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0px, #ebebeb 7px)'
  },

  menuButton: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fill: '#333',
    opacity: 0.7,
    color: '#535353',
    cursor: 'pointer',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid rgb(181, 181, 181)',
    '&:hover': {
      fill: 'rgba(0,0,0,0.7)',
      color: 'rgba(0,0,0,0.7)'
    }
  },

  menuButtonActive: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fill: '#333',
    opacity: 1,
    color: '#333',
    cursor: 'pointer',
    paddingTop: 10,
    paddingBottom: 10,
    background: 'white',
    boxShadow: '0px -7px 7px rgba(0,0,0,0.15)',
    borderBottom: '1px solid white'
  },

  menuLabel: {
    textTransform: 'uppercase',
    fontSize: 10
  },

  menuIcon: {
    width: 20,
    height: 20,
    fill: '#535353'
  },

  tabContainer: {
    padding: 10,
    marginBottom: 10
  },

  friendsContainer: {
    display: 'flex',
    direction: 'column',
    flexWrap: 'wrap'
  },

  customChip: {
    marginTop: 7,
    display: 'flex',
    flexWrap: 'nowrap',
    maxHeight: 28,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    maxWidth: '100%',
    width: '100%',
    height: 26,
    border: '1px solid #d2d2d2'
  },

  customChipAvatar: {
    width: 28,
    height: 28,
    color: '#5e5e5e',
    padding: 2,
    marginLeft: -2
  },

  customChipAvatarIcon: {
    width: 20,
    height: 20
  },

  customChipLabel: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 13,
    fontWeight: 300,
    color: '#5e5e5e'
  }
});
