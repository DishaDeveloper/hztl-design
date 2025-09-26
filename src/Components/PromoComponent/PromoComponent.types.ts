import { BaseComponentProps, Description, Image, Link } from "../../types/common";

export interface PromoComponentProps extends BaseComponentProps {
  fields?: {
    variant?: string;
    headingTitle?: string;
    description?: Description;
    image?: Image;
    promoLink?: Link;
  };
}