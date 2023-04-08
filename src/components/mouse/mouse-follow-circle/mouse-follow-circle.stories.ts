/** 鼠标跟随效果 */
const meta = {
  title: 'mouse/mouse-follow-circle',
};

export default meta;
const Template = arg => `<mouse-follow-circle color="${arg.color}">View</mouse-follow-circle>`;

export const Example = Template.bind({});

Example.args = {
  color: '#3df1db',
};
