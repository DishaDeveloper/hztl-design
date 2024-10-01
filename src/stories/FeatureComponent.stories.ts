import type { Meta, StoryObj } from '@storybook/react';
import { FeatureComponent } from '../Components/FeatureComponent'; // Adjust the import path

const meta: Meta<typeof FeatureComponent> = {
  title: 'Components/FeatureComponent',
  component: FeatureComponent,
};

export default meta;
type Story = StoryObj<typeof FeatureComponent>;

// Default story
export const Default: Story = {
  args: {},
};
