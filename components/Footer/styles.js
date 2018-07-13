export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontWeight: 300,
    textShadow: '0px 1px rgba(0,0,0,0.7)',
    '& a': {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none'
    }
  }
})
