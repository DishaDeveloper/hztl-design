import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../../src/Components/MyComponent'; // Adjust the import path

const meta: Meta<typeof MyComponent> = {
  title: 'Example/MyComponent',
  component: MyComponent,
};

export default meta;

type Story = StoryObj<typeof MyComponent>;

// Default story
export const Default: Story = {
  args: {},
};
