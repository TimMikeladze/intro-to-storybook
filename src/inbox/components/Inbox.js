import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import InboxItemList from './InboxItemList';
import InboxItemContents from './InboxItemContents';

const styles = theme => ({
  root: {
    fontFamily: theme.fonts.primaryFontFamily,
    minHeight: 760,
  },
  header: {
    padding: 20,
    background: theme.colors.primaryColor,
    color: 'white',
    alignItems: 'center',
  },
  subheader: {
    padding: 20,
    background: theme.colors.secondaryColor,
    alignItems: 'center',
  },
  subheaderLabel: {
  },
  subheaderSelect: {
    margin: '0 10px',
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    fontWeight: 600,
  },
  main: {
    display: 'flex',
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    padding: 40,
    fontWeight: 500,
    fontSize: 24,
  },
  items: {
    flexBasis: '45%',
    flexShrink: 0,
  },
  contents: {
  },
});

const Inbox = ({
  classes,
  title,
  items,
  contents,
}) =>
  <div className={classes.root}>
    <div className={classes.header}>
      {title}
    </div>
    <div className={classes.subheader}>
      <span className={classes.subheaderLabel}>Sort By:</span>
      <select className={classes.subheaderSelect} defaultValue="date">
        <option value="unread">Unread</option>
        <option value="read">Read</option>
        <option value="date">Date</option>
      </select>
    </div>
    {!isEmpty(items) &&
      <div className={classes.main}>
        <div className={classes.items}>
          <InboxItemList items={items} />
        </div>
        <div className={classes.contents}>
          <InboxItemContents contents={contents} />
        </div>
      </div>
    }
    {isEmpty(items) &&
      <div className={classes.empty}>
        Inbox is empty.
      </div>
    }
  </div>;

Inbox.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  contents: PropTypes.arrayOf(PropTypes.string),
};

Inbox.defaultProps = {
  items: [],
  contents: [],
};

export default injectSheet(styles)(Inbox);
