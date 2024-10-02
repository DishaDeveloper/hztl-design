import { ReactNode } from "react";

export type InformationComponentProps = {
    children?: ReactNode;
    componentTheme?: string;
    backgroundImage?: boolean;
uid: string;
componentName: string;
dataSource: string;
params: Record<string, unknown>;
fields: {
    variant: string;
    headingTitle: string;
    description: {
        value: string;
    };
    image: {
        value: {
            src: string;
            alt: string;
            width: string;
            height: string;
        };
    };
    promoLink: {
        value: {
            href: string;
            text: string;
            linktype: string;
            target: string;
        };
    };
}
}