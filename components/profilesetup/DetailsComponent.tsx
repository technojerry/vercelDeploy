// DetailsComponent.tsx
import React from "react";

interface DetailsComponentProps {
  details: string;
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ details }) => {
  return (
    <div>
      <h2>Details</h2>
      <p>{details}</p>
    </div>
  );
};

export default DetailsComponent;
