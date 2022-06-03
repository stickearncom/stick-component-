import SCMenu from '../index.vue'

export default {
  title: 'Navigation/Menu/MenuItem',
  component: SCMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes)
})

export const Default = Template.bind({})