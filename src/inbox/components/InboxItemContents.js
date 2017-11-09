import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const styles = theme => ({
  content: {
    border: `1px solid ${theme.colors.borderColor}`,
    marginTop: 10,
    marginLeft: 10,
    padding: 20,
    fontFamily: theme.fonts.primaryFontFamily,
    fontWeight: 300,
  },
});

const InboxItemContents = ({
  classes,
  contents,
}) =>
  <div className={classes.root}>
    {contents.map(content => (
      <div key={`content-${shortid.generate()}`} className={classes.content}>
        {content}
      </div>))
    }
  </div>;

InboxItemContents.propTypes = {
  classes: PropTypes.object.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string),
};

InboxItemContents.defaultProps = {
  contents: [],
};

export default injectSheet(styles)(InboxItemContents);
