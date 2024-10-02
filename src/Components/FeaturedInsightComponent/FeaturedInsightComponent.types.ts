import { ReactNode } from "react";

export type FeaturedInsightComponentProps = {
    children?:ReactNode;
    componentTheme?:string;
    variant?:string;
    uid?: string;
    componentName?: string;
    dataSource?: string;
    params?: Record<string, unknown>;
    fields?: {
        headingTitle: string;
        allInsightsLink: {
            value: {
                href: string;
                text: string;
                linktype: string;
                target: string;
            };
        };
        featuredInsightCard: Array<{
            id: string;
            url: string;
            fields: {
                title: {
                    value: string;
                };
                description: {
                    value: string;
                };
                ReadMoreLink: {
                    value: {
                        href: string;
                        text: string;
                        linktype: string;
                        target: string;
                    };
                };
                image: {
                    value: {
                        src: string;
                        alt: string;
                        width: string;
                        height: string;
                    };
                };
            };
        }>;
    };
}