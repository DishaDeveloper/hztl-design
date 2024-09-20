import type { Meta, StoryObj } from '@storybook/react';

import { Thing } from '../index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Thing> = {
  component: Thing,
};
export default meta;

type Story = StoryObj<typeof Thing>;
export const thing1: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
