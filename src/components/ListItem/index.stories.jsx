import React from 'react';

import Item from ".";

export default {
  title: "Components/SearchItem",
  component: Item,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Item {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "https://en.wikipedia.org/wiki/Test_Card_F",
  label:'Test data for demo'
};

