import { ReactNode } from "react";

// Common base props for all components
export interface BaseComponentProps {
  children?: ReactNode;
  componentTheme?: string;
  variant?: string;
  uid?: string;
  componentName?: string;
  dataSource?: string;
  params?: Record<string, unknown>;
}

// Common image interface
export interface ImageValue {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export interface Image {
  value: ImageValue;
}

// Common link interface
export interface LinkValue {
  href: string;
  text: string;
  linktype: string;
  target: string;
}

export interface Link {
  value: LinkValue;
}

// Common description interface
export interface Description {
  value: string;
}

// Theme types
export type ThemeType = "primary" | "secondary";

// Common theme function type
export type ThemeFunction<T = any> = (theme: ThemeType, variant?: string) => T;
