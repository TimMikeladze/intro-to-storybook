import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { get } from 'lodash';
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
  selectedId,
  readStatusMap,
  ...otherProps
}) =>
  <div className={classes.root}>
    {items.map(item => (
      <div key={`item-${item.id}`}>
        <InboxItem
          {...item}
          {...otherProps}
          isSelected={item.id === selectedId}
          isRead={get(readStatusMap, [item.id], item.isRead)}
        />
      </div>))
    }
  </div>;

InboxItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  selectedId: PropTypes.string,
  readStatusMap: PropTypes.object,
};

InboxItemList.defaultProps = {
  items: [],
  selectedId: null,
  readStatusMap: {},
};

export default injectSheet(styles)(InboxItemList);
