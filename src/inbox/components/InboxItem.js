import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, { withTheme } from 'react-jss';
import { compose } from 'recompose';
import ReactStars from 'react-stars';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
    fontFamily: theme.fonts.primaryFontFamily,
    fontSize: 16,
    fontWeight: props => (props.isSelected ? 500 : 400),
    color: props => (props.isSelected ? theme.colors.primaryColor : 'inherit'),
    borderLeft: props => `4px solid ${props.isSelected ? theme.colors.primaryColor : 'transparent'}`,
    borderBottom: `1px solid ${theme.colors.borderColor}`,
    background: props =>
      (props.isSelected || !props.isRead
        ? theme.colors.activeBackgroundColor
        : theme.colors.inactiveBackgroundColor),
    '&:hover': {
      borderLeft: props => !props.isSelected && `4px solid ${theme.colors.secondaryColor}`,
    },
  },
  isRead: ({
    border: props => `2px solid ${!props.isRead ? theme.colors.primaryColor : theme.colors.secondaryColor}`,
    background: props => (!props.isRead ? theme.colors.primaryColor : 'transparent'),
    borderRadius: '50%',
    width: 15,
    height: 15,
  }),
  title: {
    flexBasis: '40%',
  },
});

const InboxItem = ({
  classes,
  theme,
  id, // eslint-disable-line no-unused-vars
  isRead, // eslint-disable-line no-unused-vars
  handleSetReadStatus,
  isFavorite,
  handleMakeFavorite,
  isSelected, // eslint-disable-line no-unused-vars
  handleSelect,
  date,
  title,
}) => (
  <div className={classes.root} onClick={handleSelect}>
    <div className={classes.isRead} onClick={handleSetReadStatus} />
    <ReactStars
      count={1}
      color1={theme.colors.star}
      half={false}
      size={25}
      value={isFavorite ? 1 : 0}
      onChange={handleMakeFavorite}
    />
    <div className={classes.date}>
      {date}
    </div>
    <div className={classes.title}>
      {title}
    </div>
  </div>
);

InboxItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  isRead: PropTypes.bool,
  handleSetReadStatus: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  handleMakeFavorite: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

InboxItem.defaultProps = {
  isRead: false,
  isFavorite: false,
  isSelected: false,
};

export default compose(
  injectSheet(styles),
  withTheme,
)(InboxItem);
