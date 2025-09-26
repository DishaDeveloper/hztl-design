import { BaseComponentProps } from "../../types/common";

export interface GridImageComponentProps extends BaseComponentProps {
  fields?: {
    images?: Array<{
      id: string;
      src: string;
      alt: string;
      width?: string;
      height?: string;
    }>;
  };
}

export interface ViewportRect {
  bottom: number;
  right: number;
  left: number;
  top: number;
}

export interface ScrollPosition {
  scrollY: number;
  height: number;
}
