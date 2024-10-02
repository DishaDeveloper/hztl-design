import { ReactNode } from "react";

interface FeatureCards {
    id: string;
    url: string;
    name: string;
    displayName: string;
    fields: {
      description: {
        value: string;
      };
      svgImageShow: string;
      svhImageClass: string;
      image: {
        value: {
          src: string;
          alt: string;
          width: string;
          height: string;
        };
      };
    };
}
export type FeatureComponentProps = {
    children?:ReactNode;
    componentTheme?: string;
    variant?: string;
    uid?: string;
    componentName?: string;
    dataSource?: string;
    params?: Record<string, unknown>;
    fields?: {
      headingTitle: string;
      featureCard: FeatureCards[];
    };
  };