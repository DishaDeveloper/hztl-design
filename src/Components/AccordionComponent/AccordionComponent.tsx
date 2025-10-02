import React, { useState } from "react";
import defaultData from "./AccordionComponent.mock";
import { AccordionComponentProps } from "./AccordionComponent.types";
import { themesFunction } from "./AccordionComponent.themes";

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  children,
  componentTheme = "",
  variant = "",
  allowMultiple = false,
  defaultOpenIndex = -1,
}) => {
  const componentData = defaultData?.fields;

  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState<Set<number>>(
    defaultOpenIndex >= 0 ? new Set([defaultOpenIndex]) : new Set()
  );

  // Theme logic
  const themeStyle = (): string => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("primary")
        ? "primary"
        : "secondary";
    }
    return componentTheme !== "" ? componentTheme : "primary";
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  // Toggle accordion item
  const toggleAccordion = (index: number): void => {
    const newOpenItems = new Set(openItems);
    
    if (allowMultiple) {
      // Allow multiple items to be open
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    } else {
      // Only allow one item to be open at a time
      if (newOpenItems.has(index)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(index);
      }
    }
    
    setOpenItems(newOpenItems);
  };

  const AccordionComponentDefault = (): JSX.Element => {
    return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {/* Header Section */}
        <div className="mb-8 lg:mb-16 text-center">
          <h2 className={`text-4xl font-bold leading-snug mb-4 ${themeStyles?.headingTitle}`}>
            {componentData?.headingTitle}
          </h2>
          {componentData?.description && (
            <p className={`text-lg max-w-3xl mx-auto ${themeStyles?.description}`}>
              {componentData?.description?.value}
            </p>
          )}
        </div>

        {/* Accordion Items */}
        <div className={`max-w-4xl mx-auto ${themeStyles?.accordionContainer}`}>
          {componentData?.accordionItems?.map((item, index) => {
            const isOpen = openItems.has(index);
            
            return (
              <div key={item.id} className={themeStyles?.accordionItem}>
                {/* Accordion Header */}
                <button
                  className={themeStyles?.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${item.id}`}
                >
                  <span className={themeStyles?.accordionTitle}>
                    {item?.fields?.title?.value}
                  </span>
                  <svg
                    className={`${themeStyles?.accordionIcon} ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div
                    id={`accordion-content-${item.id}`}
                    className={themeStyles?.accordionContent}
                    role="region"
                    aria-labelledby={`accordion-header-${item.id}`}
                  >
                    <p className={themeStyles?.accordionContentText}>
                      {item?.fields?.content?.value}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className={themeStyles?.componentBG}>
      {children ? children : <AccordionComponentDefault />}
    </section>
  );
};

export default AccordionComponent;
