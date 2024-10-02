import type { Meta, StoryObj } from '@storybook/react';
import {PromoComponent  } from '../Components/PromoComponent'; // Adjust the import path

const meta: Meta<typeof PromoComponent> = {
  title: 'Components/PromoComponent',
  component: PromoComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PromoComponent>;

// Default story
export const LeftImage: Story = {
  args: {
    variant:'LeftImage'
  },
};
export const RightImage: Story = {
  args: {
     variant:'RightImage'
  },
};
