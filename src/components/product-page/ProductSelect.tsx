import React, { useState } from "react";
import SelectButton from "../ui/SharedComponent/SelectButton";
import CustomRadioButton from "../ui/SharedComponent/RadioButton";

const ProductSelect = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");
  return (
    <>
    <div className=" devid-primary-gray devide-y " >
        <div>hh</div>
        <div>dd</div>

    </div>
    <div className="flex flex-row space-x-4   ">
      {/* <SelectButton color="custom-black" />
      <SelectButton color="custom-orange" />
      <SelectButton color="custom-black" />
      <SelectButton color="custom-red" />
      <SelectButton color="custom-blue" />
      <SelectButton color="custom-green" /> */}
    </div>
    <div className="flex space-x-4">
    <CustomRadioButton
      checked={selectedValue === "option1"}
      onChange={() => setSelectedValue("option1")}
      label="label"
    />
    <CustomRadioButton
      checked={selectedValue === "option2"}
      onChange={() => setSelectedValue("option2")}
      label="label"
    />
    <CustomRadioButton
      checked={selectedValue === "option3"}
      onChange={() => setSelectedValue("option3")}
      label="label"
    />
  </div>
  </>
  );
};

export default ProductSelect;
