import type { Meta, StoryObj } from '@storybook/react';
import {GridImageComponent  } from '../Components/GridImageComponent'; // Adjust the import path

const meta: Meta<typeof GridImageComponent> = {
  title: 'Components/GridImageComponent',
  component: GridImageComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GridImageComponent>;

// Default story
export const Default: Story = {
  args: {},
};
