import React from 'react';
import { storiesOf } from '@storybook/react';
import casual from 'casual-browserify';
import InboxItemContents from '../src/inbox/components/InboxItemContents';


storiesOf('InboxItemContents', module)
  .add('one message', () =>
    <InboxItemContents
      contents={[
        casual.text,
      ]}
    />)
  .add('multiple messages', () =>
    <InboxItemContents
      contents={[
        casual.text,
        casual.text,
        casual.text,
      ]}
    />);
