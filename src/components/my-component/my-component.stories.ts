const meta = {
  title: 'Components/MyComponent',
};

export default meta;
const Template = arg => `<my-component first="${arg.first}" last="${arg.last}"></my-component>`;

export const Example = Template.bind({});

Example.args = {
  first: 'first',
  last: 'last',
};
