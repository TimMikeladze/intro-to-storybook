import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import InboxItem from './InboxItem';

const styles = theme => ({
  root: {
    fontFamily: theme.fonts.primaryFontFamily,
    fontSize: 16,
    fontWeight: 300,
    borderRight: `1px solid ${theme.colors.borderColor}`,
  },
});

const InboxItemList = ({
  classes,
  items,
  ...otherProps
}) =>
  <div className={classes.root}>
    {items.map(item => (
      <div key={`item-${item.id}`}>
        <InboxItem {...item} {...otherProps} />
      </div>))
    }
  </div>;

InboxItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

InboxItemList.defaultProps = {
  items: [],
};

export default injectSheet(styles)(InboxItemList);
