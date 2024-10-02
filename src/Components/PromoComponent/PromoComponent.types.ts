import { ReactNode } from "react";

  interface Description {
    value: string;
  }
  
  interface Image {
    value: ImageValue;
  }
  
  interface ImageValue {
    src: string;
    alt: string;
    width: string;
    height: string;
  }
  
  interface PromoLink {
    value: PromoLinkValue;
  }
  
  interface PromoLinkValue {
    href: string;
    text: string;
    linktype: string;
    target: string;
  }
  
export type PromoComponentProps = {
    componentTheme?: string;
    variant?:string;
    children?: ReactNode;
    uid?:string;
    componentName?:string;
    dataSource?:string;
    params?:{},
    fields? : {
        variant:string,
        headingTitle:string,
        description: Description;
        image: Image;
        promoLink: PromoLink;
    }
  };