import { BaseComponentProps, Description, Image } from "../../types/common";

interface FeatureCards {
    id: string;
    url: string;
    name: string;
    displayName: string;
    fields: {
      description: Description;
      svgImageShow: string;
      svhImageClass: string;
      image: Image;
    };
}

export interface FeatureComponentProps extends BaseComponentProps {
    fields?: {
      headingTitle: string;
      featureCard: FeatureCards[];
    };
}