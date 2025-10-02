import type { Meta, StoryObj } from '@storybook/react';
import { AccordionComponent } from '../Components/AccordionComponent';

const meta: Meta<typeof AccordionComponent> = {
  title: 'Components/AccordionComponent',
  component: AccordionComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    componentTheme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Theme variant for the accordion component',
    },
    allowMultiple: {
      control: { type: 'boolean' },
      description: 'Allow multiple accordion items to be open simultaneously',
    },
    defaultOpenIndex: {
      control: { type: 'number' },
      description: 'Index of the accordion item that should be open by default (-1 for none)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    componentTheme: 'primary',
    allowMultiple: false,
    defaultOpenIndex: 0,
  },
};

export const Secondary: Story = {
  args: {
    componentTheme: 'secondary',
    allowMultiple: false,
    defaultOpenIndex: -1,
  },
};

export const AllowMultiple: Story = {
  args: {
    componentTheme: 'primary',
    allowMultiple: true,
    defaultOpenIndex: 0,
  },
};

export const NoDefaultOpen: Story = {
  args: {
    componentTheme: 'primary',
    allowMultiple: false,
    defaultOpenIndex: -1,
  },
};
