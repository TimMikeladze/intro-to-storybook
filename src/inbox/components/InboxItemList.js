import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import InboxItem from './InboxItem';

const styles = {
  root: {
  },
};

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
