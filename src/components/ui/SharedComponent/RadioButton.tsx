import React from "react";
import clsx from "clsx";

interface CustomRadioButtonProps {
  checked: boolean;
  onChange: () => void;
  label:string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className={clsx(
        "flex items-center px-2 py-2 rounded-2xl cursor-pointer",
        checked ? "bg-white" : "bg-primary-gray"
      )}>      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className={clsx(
          "peer relative appearance-none shrink-0 w-[30px] h-[30px] rounded-full border-2",
          "bg-white",
          "checked:bg-primary-blue checked:border-white checked:ring-2 checked:ring-offset-1 checked:ring-white"
        )}
      />
  <span className={clsx(
          "text-primary-blue ml-2 peer-checked:text-primary-blue"
      )}>{label}</span>    </label>
  );
};

export default CustomRadioButton;
