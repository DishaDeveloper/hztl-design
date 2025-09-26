import { BaseComponentProps, Description, Image, Link } from "../../types/common";

interface InsightCard {
  id: string;
  url: string;
  fields: {
    title: {
      value: string;
    };
    description: Description;
    ReadMoreLink: Link;
    image: Image;
  };
}

export interface FeaturedInsightComponentProps extends BaseComponentProps {
  fields?: {
    headingTitle: string;
    allInsightsLink: Link;
    featuredInsightCard: InsightCard[];
  };
}