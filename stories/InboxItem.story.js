import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import casual from 'casual-browserify';
import InboxItem from '../src/inbox/components/InboxItem';

const inboxItem = {
  id: casual.uuid,
  title: casual.words(3),
  date: casual.date('MM/DD/YY'),
  handleSetReadStatus: action('handleSetReadStatus'),
  handleSelect: action('handleSelect'),
  handleMakeFavorite: action('handleMakeFavorite'),
};

storiesOf('InboxItem', module)
  .add('not selected and not read', () =>
    <InboxItem
      {...inboxItem}
    />)
  .add('not selected and read', () =>
    <InboxItem
      {...inboxItem}
      isRead
    />)
  .add('selected and not read', () =>
    <InboxItem
      {...inboxItem}
      isSelected
    />)
  .add('selected and read', () =>
    <InboxItem
      {...inboxItem}
      isRead
      isSelected
    />);
