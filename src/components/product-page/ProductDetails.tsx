import React from "react";
import Text from "../ui/SharedComponent/Text";
import CheckIcon from "../icons/CheckIcon";

interface Benefit {
  id: number;
  text: string;
}

const ProductDetails: React.FC = () => {
  const benefits = [
    {
      id: 1,
      text: "Durable leather is easily cleanable so you can keep your look fresh..",
    },
    {
      id: 2,
      text: "Water-repellent finish and internal membrane help keep your feet dry.",
    },
    { id: 3, text: "Toe piece with star pattern adds durability." },
    { id: 4, text: "Synthetic insulation helps keep you warm." },
    {
      id: 5,
      text: "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
    },
    {
      id: 6,
      text: "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
    },
    {
      id: 7,
      text: "Rubber outsole with aggressive traction pattern adds durable grip.",
    },
    {
      id: 8,
      text: "Durable leather is easily cleanable so you can keep your look fresh.",
    },
  ];

  return (
    <div className="p-4">
      <ProductDescription
        header="Product Description "
        description="When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge"
        benefits={benefits}
      />
    </div>
  );
};

export default ProductDetails;

interface ProductDescriptionProps {
  header: string;
  description: string;
  benefits: Benefit[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  header,
  description,
  benefits,
}) => {
  return (
    <div className=" my-6 sm:my-6 3xl:my-12 space-y-6 sm:space-y-10 2xl:space-y-20 ">
      <div className=" space-y-3 sm:space-y-5 2xl:space-y-8 " >
        <Text variant="heading2xl" color="black" fontWeight="medium">
          {header}
        </Text>
        <Text variant="bodySm" color="gray">
          {description}
        </Text>
      </div>
      <div className=" space-y-3 sm:space-y-5 2xl:space-y-8 " >
        <Text variant="heading2xl" color="black" fontWeight="medium">
          Benefits:
        </Text>
        <ul className="list-disc list-inside space-y-4">
          {benefits.map((benefit) => (
            <div className="flex items-center space-x-3 ">
              <div className=" p-2 bg-blue-light rounded-full ">
                <CheckIcon className="w-3 h-3" />
              </div>
              <Text
                variant="bodySm"
                color="gray"
                key={benefit.id}
                className="text-lg"
              >
                {benefit.text}
              </Text>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
