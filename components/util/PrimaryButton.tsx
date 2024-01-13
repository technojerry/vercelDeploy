import React from "react";

interface PrimaryButtonProps {
  name: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ name }) => {
  return (
    <div className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
      {name}
    </div>
  );
};

export default PrimaryButton;
