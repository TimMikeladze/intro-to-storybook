import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import InboxItemList from './InboxItemList';
import InboxItemContents from './InboxItemContents';
import LoadingIndicator from './LoadingIndicator';

const styles = theme => ({
  root: {
    fontFamily: theme.fonts.primaryFontFamily,
    minHeight: 760,
    height: '100%',
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
  loading: {
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
  },
});

const Inbox = ({
  classes,
  loading,
  title,
  items,
  contents,
  selectedId,
  handleSelect,
  readStatusMap,
  handleSetReadStatus,
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
    {loading
      ?
        <div className={classes.loading}>
          <LoadingIndicator />
        </div>
      : <div>
        {!isEmpty(items) &&
          <div className={classes.main}>
            <div className={classes.items}>
              <InboxItemList
                items={items}
                selectedId={selectedId}
                handleSelect={handleSelect}
                readStatusMap={readStatusMap}
                handleSetReadStatus={handleSetReadStatus}
              />
            </div>
            <div className={classes.contents}>
              <InboxItemContents
                contents={contents}
              />
            </div>
          </div>
        }
        {isEmpty(items) &&
          <div className={classes.empty}>
            Inbox is empty.
          </div>
        }
      </div>
    }
  </div>;

Inbox.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  contents: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
  readStatusMap: PropTypes.object,
  handleSetReadStatus: PropTypes.func.isRequired,
};

Inbox.defaultProps = {
  loading: false,
  items: [],
  contents: [],
  selectedId: null,
  readStatusMap: {},
};

export default injectSheet(styles)(Inbox);
