import Text from "./SharedComponent/Text";
import Tooltip from "./SharedComponent/Tooltip";
import { BookmarkIcon, LoveIcon, ShareIcon } from "../icons";

const ProductDescription = () => {
  return (
    <div className="flex justify-between border-b border-primary-gray pb-8 ">
      <div>
        <Text variant="heading2xl" color="black" fontWeight="bold">
          Polo Shirt
        </Text>
        <Text variant="bodySm" color="chocolate" lineHeight="loose">
          Teixeira Design Studio
        </Text>
      </div>
      <div className=" ">
        <div className="flex space-x-2" >
          <Tooltip
        icon={<LoveIcon stroke="#3A4980" />} 
        text="109" 
        bgColor="blue-light" 
        textColor="blue-dark" 
      />
  
          <Tooltip
        icon={<BookmarkIcon stroke="#3A4980" />} 
        bgColor="blue-light" 
        textColor="blue-dark" 
      />
        <Tooltip
        icon={<ShareIcon stroke="#3A4980" />} 
        bgColor="blue-light"  
      />
      </div>
      
      </div>
      {/*  */}
      
      {/*  */}
    </div>
  );
};

export default ProductDescription;
