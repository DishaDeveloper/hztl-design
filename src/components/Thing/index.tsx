import React from 'react';

export interface Props {
  children: string;
}
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing = ({ children }: Props) => {
  return (
    <div className="text-xl text-pink-500 p-4 bg-gray-200 rounded-lg">
      {children ||
        `Horizontal design plays an important role in creating good elements as part of the design system.`}
    </div>
  );
};
