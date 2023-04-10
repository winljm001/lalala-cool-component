/** 内容处理成朋克风格 */
const meta = {
  title: 'adjunction/adjunction-cyberpunk',
};

export default meta;
const Template = arg =>
  `<adjunction-cyberpunk mode="${arg.mode}"><img src="https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png" style="width:200px;height:200px"/><img slot="copy" src="https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png" style="width:200px;height:200px"/></adjunction-cyberpunk>`;

export const Example = Template.bind({});

Example.args = {
  /** 触发模式：hover，auto */
  mode: 'auto',
};
