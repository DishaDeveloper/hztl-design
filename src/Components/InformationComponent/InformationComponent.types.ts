import { BaseComponentProps, Description, Image, Link } from "../../types/common";

export interface InformationComponentProps extends BaseComponentProps {
  backgroundImage?: boolean;
  fields?: {
    variant: string;
    headingTitle: string;
    description: Description;
    image: Image;
    promoLink: Link;
  };
}