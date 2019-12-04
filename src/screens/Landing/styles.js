export default (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '150px',

  },
  paragraph: {
    color: theme.colorPrimary,
    fontFamily: theme.typography,
    '&:hover': {
      color: theme.hoverColor,
    }
  },
});
