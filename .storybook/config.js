import Theme from './decorators/Theme';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../stories', true, /\.story\.js$/)

addDecorator(Theme);

const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module);
