import { BaseComponentProps, Description } from "../../types/common";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isOpen?: boolean;
  fields: {
    title: {
      value: string;
    };
    content: Description;
    icon?: {
      value: {
        src: string;
        alt: string;
      };
    };
  };
}

export interface AccordionComponentProps extends BaseComponentProps {
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
  fields?: {
    headingTitle: string;
    description?: Description;
    accordionItems: AccordionItem[];
  };
}
