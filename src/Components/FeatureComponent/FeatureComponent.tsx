import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FeatureComponentProps {
  className?: string; // Additional Tailwind classes
}

export const FeatureComponent: React.FC<FeatureComponentProps> = ({
  className = "",
}) => {
  const baseStyle = "py-2 px-4 rounded"; // Base styles
  const [themeStyleDynamic, setThemeStyleDynamic] = useState<string>(""); // State for theme styles

  const themeStyle = () => {
    if (typeof document !== "undefined") {
      return document?.documentElement?.classList?.contains("secondary")
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white";
    } else {
      const isSecondary = className.includes("secondary");
      return isSecondary
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white";
    }
  };

  useEffect(() => {
    // Determine the theme style based on the className prop
    const isSecondary = className.includes("secondary");
    setThemeStyleDynamic(
      isSecondary
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white"
    ); // Primary styles
  }, [className]);

  // Merge styles using tailwind-merge
  const mergedClasses = twMerge(
    `${baseStyle} ${themeStyle() || themeStyle}`,
    className
  );

  // Determine the SVG class based on className
  const svgClass = className.includes("secondary")
    ? "w-5 h-5 text-secondary-600 lg:w-6 lg:h-6 dark:text-primary-300"
    : "w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300";

  return (
    <div className={mergedClasses}>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Empowering Teams to Achieve More
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              At Flowbite, we innovate at the intersection of technology and
              teamwork, driving sustainable growth through collaboration and
              creativity.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className={svgClass}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Creative Strategy
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Transform your vision into reality. Collaborate closely with
                your team to develop innovative strategies that captivate and
                engage your audience.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className={svgClass}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Compliance
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Ensure your operations meet industry standards. Our tailored
                compliance solutions help you maintain regulatory requirements
                effortlessly.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className={svgClass}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Operational Efficiency
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Streamline your processes with automation tools. Enhance
                productivity by simplifying repetitive tasks and enabling your
                team to focus on strategic initiatives.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className={svgClass}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 9.765 14 9 14 8c0-.99-.602-1.765-1.324-2.246a4.535 4.535 0 00-1.676-.662V5zm-3 5a1 1 0 112 0 1 1 0 01-2 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Data Security
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Protect sensitive information with robust security protocols.
                Our solutions ensure that your data remains secure, allowing you
                to operate with confidence.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className={svgClass}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 00-.707.293l-8 8a1 1 0 000 1.414l8 8A1 1 0 0010 20a1 1 0 00.707-1.707L3.414 11H18a1 1 0 100-2H3.414l7.293-7.293A1 1 0 0010 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Innovative Solutions
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stay ahead in a rapidly changing landscape. Our innovative
                solutions equip your team with the tools needed to adapt and
                thrive in a competitive environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
