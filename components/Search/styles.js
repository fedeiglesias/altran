export default theme => ({
  root: {
    flex: 2,
    maxWidth: 200,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    height: 40,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)'
    }
  },

  rootActive: {
    extend: 'root',
    maxWidth: '300px'
  },

  searchInput: {
    fontSize: 14,
    fontFamily: '"Exo 2", sans-serif',
    fontWeight: 200,
    background: 'transparent',
    border: 0,
    width: '100%',
    color: 'white',
    height: '100%',
    paddingLeft: 5,
    paddingRight: 20,
    outline: 0,
    cursor: 'pointer'
  },

  icon: {
    margin: 10,
    marginTop: 11,
    opacity: 0.7,
    transition: 'all 0.3s ease'
  },

  iconActive: {
    extend: 'icon',
    opacity: 1
  },

  progress: {
    maxHeight: 20,
    maxWidth: 20,
    margin: theme.spacing.unit * 2
  },

  svg: {
    width: 20,
    height: 20
  }
});
