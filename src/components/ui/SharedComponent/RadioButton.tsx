import React from "react";
import clsx from "clsx";
import Text from "./Text";
interface CustomRadioButtonProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label
      className={clsx(
        "flex items-center px-2 py-2 rounded-2xl cursor-pointer",
        checked ? "bg-blue-light" : "bg-primary-gray"
      )}
    >
      {" "}
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className={clsx(
          "peer relative appearance-none shrink-0 w-[16px] h-[16px] rounded-full border-2",
          "bg-white",
          "checked:bg-primary-blue checked:border-white checked:ring-2 checked:ring-offset-1 checked:ring-white"
        )}
      />
      <Text variant="bodyXs"
        className={clsx(
          " text-chocolate-text  ml-2 peer-checked:text-primary-blue"
        )}
      >
        {label}
      </Text>{" "}
    </label>
  );
};

export default CustomRadioButton;
