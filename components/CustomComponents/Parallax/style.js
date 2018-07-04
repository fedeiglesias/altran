const parallaxStyle = {
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  innerShadowTop: {
    boxShadow: '0 0 1px 1px rgba(255, 255, 255, 0.1)',
    "&:after": {
      width: '100%',
      height: 8,
      content: "''",
      top: 0,
      position: 'absolute',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
    }
  },
  innerShadowBottom: {
    boxShadow: '0 0 1px 1px rgba(255, 255, 255, 0.1)',
    "&:after": {
      width: '100%',
      height: 8,
      content: "''",
      bottom: 0,
      position: 'absolute',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
    }
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    },
  },
  small: {
    height: "380px"
  }
};

export default parallaxStyle;
