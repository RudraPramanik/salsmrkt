import blue from '../assets/blue.svg'
import purple from '../assets/purple.svg'
import red from '../assets/red.svg'
import white from '../assets/white.svg'
import yellow from '../assets/yellow.svg'
import black from '../assets/black.svg'

const productData = {
    id: 1,
    name: "Fashion T-Shirt",
    description: "High-quality cotton t-shirt available in multiple colors and sizes.",
    colors: [
        {
            name: "Black",
            sizes: [
                { size: "Small", price: 10 },
              { size: "Medium", price: 12 },
              { size: "Large", price: 14 },
              { size: "Extra Large", price: 16 },
              { size: "XXL", price: 18 }
            ],
            image: black
          },
          {
            name: "#f2f0f0",
            sizes: [
                { size: "Small", price: 10 },
              { size: "Medium", price: 12 },
              { size: "Large", price: 14 },
              { size: "Extra Large", price: 16 },
              { size: "XXL", price: 18 }
            ],
            image: white
          },
      {
        name: "#BB0043",
        sizes: [ 
          { size: "Small", price: 10 },
          { size: "Medium", price: 12 },
          { size: "Large", price: 14 },
          { size: "Extra Large", price: 16 },
          { size: "XXL", price: 18 }
        ],
        image: red
      },
      {
        name: "#0078B5",
        sizes: [
            { size: "Small", price: 10 },
            { size: "Medium", price: 12 },
            { size: "Large", price: 14 },
            { size: "Extra Large", price: 16 },
            { size: "XXL", price: 18 }
        ],
        image: blue
      },
      
      {
        name: "#5D21B7",
        sizes: [
            { size: "Small", price: 10 },
            { size: "Medium", price: 12 },
            { size: "Large", price: 14 },
            { size: "Extra Large", price: 16 },
            { size: "XXL", price: 18 }
        ],
        image: purple
      },
      {
        name: "#FFAC3C",
        sizes: [
            { size: "Small", price: 10 },
            { size: "Medium", price: 12 },
            { size: "Large", price: 14 },
            { size: "Extra Large", price: 16 },
            { size: "XXL", price: 18 }
        ],
        image: yellow
      }
    ]
  };
  
  export default productData;
  