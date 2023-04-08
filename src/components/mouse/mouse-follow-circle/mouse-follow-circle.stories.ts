/** 鼠标跟随效果 */
const meta = {
  title: 'mouse/mouse-follow-circle',
};

export default meta;
const Template = arg => `<mouse-follow-circle color="${arg.color}" max-size="${arg.maxSize}" min-size="${arg.minSize}">View</mouse-follow-circle>`;

export const Example = Template.bind({});

Example.args = {
  /** 圆圈的颜色 */
  color: '#3df1db',
  /** 展示子元素的时候的大小 */
  maxSize: '64px',
  /** 普通样子时的大小 */
  minSize: '24px',
};
