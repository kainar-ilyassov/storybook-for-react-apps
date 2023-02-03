import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1128%3A3451&t=yNQFDl5oqGe4K0q3-4',
  },
}

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1128%3A3457&t=yNQFDl5oqGe4K0q3-4',
  },
}
