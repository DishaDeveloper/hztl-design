import type { Meta, StoryObj } from '@storybook/react';
import {PromoComponent  } from '../Components/PromoComponent'; // Adjust the import path

const meta: Meta<typeof PromoComponent> = {
  title: 'Components/PromoComponent',
  component: PromoComponent,
};

export default meta;
type Story = StoryObj<typeof PromoComponent>;

// Default story
export const Default: Story = {
  args: {},
};
