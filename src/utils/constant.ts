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
        name: "White",
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
        name: "Green",
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
        name: "Yellow",
        sizes: [
            { size: "Small", price: 10 },
            { size: "Medium", price: 12 },
            { size: "Large", price: 14 },
            { size: "Extra Large", price: 16 },
            { size: "XXL", price: 18 }
        ],
        image: yellow
      },
      {
        name: "Red",
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
        name: "Blue",
        sizes: [
            { size: "Small", price: 10 },
            { size: "Medium", price: 12 },
            { size: "Large", price: 14 },
            { size: "Extra Large", price: 16 },
            { size: "XXL", price: 18 }
        ],
        image: blue
      },
    ]
  };
  
  export default productData;
  