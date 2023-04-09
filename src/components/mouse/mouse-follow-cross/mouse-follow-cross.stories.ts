/** 鼠标跟随效果 */
const meta = {
  title: 'mouse/mouse-follow-cross',
};

export default meta;
const Template = arg => `<mouse-follow-cross max-size="${arg.maxSize}" min-size="${arg.minSize}">View</mouse-follow-cross>`;

export const Example = Template.bind({});

Example.args = {
  /** 展示子元素的时候的大小 */
  maxSize: '64px',
  /** 普通样子时的大小 */
  minSize: '24px',
};
