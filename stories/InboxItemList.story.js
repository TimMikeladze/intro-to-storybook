import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import casual from 'casual-browserify';
import { times } from 'lodash';
import InboxItemList from '../src/inbox/components/InboxItemList';

const inboxItem = () => ({
  id: casual.uuid,
  title: casual.words(3),
  date: casual.date('MM/DD/YY'),
  isRead: casual.coin_flip,
  isFavorite: casual.coin_flip,
  handleSetReadStatus: action('handleSetReadStatus'),
  handleSelect: action('handleSelect'),
  handleMakeFavorite: action('handleMakeFavorite'),
});

const inboxItems = [
  {
    ...inboxItem(),
    isSelected: true,
  },
  ...times(10, inboxItem),
];

storiesOf('InboxItemList - small phone', module)
  .addDecorator(host({
    width: 360,
  }))
  .add('list of items', (withInfo(`
    Some information about the InboxItemList component
  `)(() =>
    <InboxItemList
      items={inboxItems}
    />)));

storiesOf('InboxItemList - tablet', module)
  .addDecorator(host({
    width: 960,
  }))
  .add(
    'list of items',
    (() =>
      <InboxItemList
        items={inboxItems}
      />),
  );
