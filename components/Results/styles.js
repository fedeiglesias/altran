// Styles
export default theme => ({
  root: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },

  item: {
    '@media (min-width: 870px)': {
      maxWidth: 'calc(100% * (1/2) - 14px - 1px)'
    }
  }
})
