import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingIndicator from '../src/inbox/components/LoadingIndicator';

storiesOf('LoadingIndicator', module)
  .add('spinning', () =>
    <LoadingIndicator size={10} />);
