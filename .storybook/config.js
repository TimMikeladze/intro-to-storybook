import Theme from './decorators/Theme';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';

const req = require.context('../stories', true, /\.story\.js$/)

addDecorator(Theme);
addDecorator(withKnobs);

const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module);
