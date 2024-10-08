import { Meta, StoryObj } from "@storybook/react";
import { InformationComponent } from "../Components/InformationComponent";

const meta: Meta<typeof InformationComponent> = {
  title: "Components/InformationComponent",
  component: InformationComponent,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InformationComponent>;

export const Default: Story = {
  args: {
    componentTheme:"secondary"
    // The theme will be provided by Storybook globals, so no need to pass it here
  },
};
export const variant1: Story = {
  args: {
    backgroundImage: true,
    componentTheme:'primary'
  },
};

