import React from "react";
import clsx from "clsx";
import { OneIcon } from "../../icons";

interface SelectButtonProps {
  color: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({ color }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="
  peer relative appearance-none shrink-0 w-8 h-8 sm:w-[48] sm:h-[48] xl:w-[60px] xl:h-[60px] 3xl:w-[70px] 3xl:h-[70px] border-none rounded-full mt-1 bg-black
  checked:bg-black
  checked:outline-none checked:ring-offset-1 checked:ring-[2px] checked:ring-black

  
"
      />
      <OneIcon customStroke="white" />
    </label>
  );
};

export default SelectButton;
