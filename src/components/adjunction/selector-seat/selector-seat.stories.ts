/** 选座位组件 */
const meta = {
  title: 'adjunction/selector-seat',
};

export default meta;
const Template = arg => `<div style="width:600px;height:600px;"><selector-seat background-img="${arg.backgroundImg}"></selector-seat></div>`;

export const Example = Template.bind({});

Example.args = {
  backgroundImg: 'https://cdn.lijiaming.top/img/bg1.png',
};
