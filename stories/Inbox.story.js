import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import casual from 'casual-browserify';
import { times } from 'lodash';
import Inbox from '../src/inbox/components/Inbox';

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

storiesOf('Inbox - large', module)
  .addDecorator(host({
    width: '100%',
  }))
  .add('empty', () =>
    <Inbox
      title="Inbox"
    />)
  .add('not empty', () =>
    <Inbox
      title="Inbox"
      items={inboxItems}
      contents={[
        casual.text,
        casual.text,
      ]}
    />);
