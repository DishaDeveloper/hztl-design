import React, { useEffect, useState } from "react";

interface TestComponentProps {
  className?: string; // Additional Tailwind classes
}

export const TestComponent: React.FunctionComponent<TestComponentProps> = (
  props
) => {
  const [disha, setDisha] = useState("hello disha");
  useEffect(() => {
    setDisha("How are you?");
  }, []);
  return <div>{disha}</div>;
};
