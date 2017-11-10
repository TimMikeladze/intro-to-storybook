# Outline

- Hi thanks for listening to me.
- Who here's familiar with Storybook and/or React.
- Topics of discussion
 - Storybook
   - What is storybook and why it's useful tool for your development flow?
   - Storybook setup and demo
   - Writing our first component
   - Exploring Storybook, what else can you do with it?
    - addons, actions, logging, decorators, etc
    - pimping out storybook
   - Testing components
   - Writing our second component, this time tests come first
   - Deploying prototypes
 - React
  - Classes vs functions
  - Intro to higher order components
  - Pure components
  - Recompose - utility belt functions
    - prop management, lifecycles, state, and other goodies
  - Updating our components to use recompose
- Plug the social medias and thank everyone for listening.


## Steps

- `yarn init` the project
- `yarn react react-dom`. Note: `getstorybook` will auto detect if you chose Vue
- Install the storybook cli `npm install`
- `getstorybook` - Setups storybook, modifies package.json with scripts and packages
  - Show changes in package.json
  - Explain that storybook using `react-create-app` and `webpack` under the hood.
  - Show created files.
- Run `yarn storybook`
 - Quick tour of the ui panes
 - Show existing demo
- Break down the code and story book api
 - `storiesOf`, (name of story group, module where story code lives for live reload / hot module replacement)
 - `addStory`, (name of story, a function returning a react component)
- Start writing first component
 - Show mockup of what we're going to build
 - Break down the mockup into separate pieces describing each component
  - List
  - List item
  - Item contents
  - List controls
  - Root
- Detour into pimping out storybook
- Add tests for the component
 - Snapshot testing
