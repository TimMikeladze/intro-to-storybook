import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    border: `12px solid ${theme.colors.secondaryColor}`,
    borderTop: `12px solid ${theme.colors.primaryColor}`,
    borderRadius: '50%',
    width: 60,
    height: 60,
    animation: 'spin 1.5s linear infinite',
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
});

const LoadingIndicator = ({
  classes,
}) =>
  <div className={classes.root} />;

LoadingIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(LoadingIndicator);
