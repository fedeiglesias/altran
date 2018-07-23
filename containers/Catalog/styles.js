export default theme => ({
  '@global':{
    body: {
      backgroundImage: 'url(static/img/bg.png)'
    }
  },
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
    paddingBottom: 50
  },

  filterButton: {
    position: 'fixed',
    bottom: 20,
    right: 30
  },

  brand: {
  },

  title: {
  },

  parallax: {
    width: '100%',
    backgroundColor: 'black'
  },

  header: {
    backgroundColor: 'black',
    borderBottom: '1px solid rgb(0, 0, 0)',
    boxShadow: 'rgb(0, 0, 0) 0px -2px 11px 2px inset, 0px 0px 3px 1px rgba(255,255,255,0.1)'
  },

  main: {
    maxWidth: 900,
    minHeight: 500,
    background: 'rgba(255,255,255, 0.9)',
    boxShadow: (
      'inset 0px 0px 200px 15px rgba(255, 255, 255, 1),'
      + ' 0px 4px 9px 3px rgba(0, 0, 0, 0.5),'
      + ' 0px 0px 20px 0px rgba(0, 0, 0, 0.2)'),
    marginTop: -150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    zIndex: 10,
    width: 'calc(100% - 40px)',
    padding: 10,
    display: 'flex',
    flexWrap: 'nowrap'
  },

  buttonOpenFilters: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 10000
  },

  filtersModal: {
    height: '100%',
    overflowY: 'scroll',
    backgroundColor: 'white'
  },

  buttonFiltersBack: {
    position: 'fixed',
    top: 20,
    right: 35,
    zIndex: 11000
  },
})
