import { Meta, StoryObj } from "@storybook/react";
import { FeaturedInsightComponent } from "../Components/FeaturedInsightComponent";

const meta: Meta<typeof FeaturedInsightComponent> = {
  title: "Components/FeaturedInsightComponent",
  component: FeaturedInsightComponent,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedInsightComponent>;

export const Default: Story = {
  args: {
    componentTheme:"secondary"
    // The theme will be provided by Storybook globals, so no need to pass it here
  },
};
export const variant1: Story = {
  args: {
    componentTheme:'primary'
  },
};

