import black from '../assets/black.png'
import blue from '../assets/blue.png'
import purple from '../assets/purple.png'
import red from '../assets/red.png'
import white from '../assets/white.png'
import yellow from '../assets/white.png'

const productData = {
    id: 1,
    name: "Fashion T-Shirt",
    description: "High-quality cotton t-shirt available in multiple colors and sizes.",
    colors: [
      {
        name: "Red",
        sizes: [
          { size: "S", price: 15.99 },
          { size: "M", price: 16.99 },
          { size: "L", price: 17.99 },
          { size: "XL", price: 18.99 },
          { size: "XXL", price: 19.99 }
        ],
        image: red
      },
      {
        name: "Blue",
        sizes: [
          { size: "S", price: 14.99 },
          { size: "M", price: 15.99 },
          { size: "L", price: 16.99 },
          { size: "XL", price: 17.99 },
          { size: "XXL", price: 18.99 }
        ],
        image: blue
      },
      {
        name: "Black",
        sizes: [
          { size: "S", price: 18.99 },
          { size: "M", price: 19.99 },
          { size: "L", price: 20.99 },
          { size: "XL", price: 21.99 },
          { size: "XXL", price: 22.99 }
        ],
        image: black
      },
      {
        name: "White",
        sizes: [
          { size: "S", price: 12.99 },
          { size: "M", price: 13.99 },
          { size: "L", price: 14.99 },
          { size: "XL", price: 15.99 },
          { size: "XXL", price: 16.99 }
        ],
        image: white
      },
      {
        name: "Green",
        sizes: [
          { size: "S", price: 13.99 },
          { size: "M", price: 14.99 },
          { size: "L", price: 15.99 },
          { size: "XL", price: 16.99 },
          { size: "XXL", price: 17.99 }
        ],
        image: purple
      },
      {
        name: "Yellow",
        sizes: [
          { size: "S", price: 17.99 },
          { size: "M", price: 18.99 },
          { size: "L", price: 19.99 },
          { size: "XL", price: 20.99 },
          { size: "XXL", price: 21.99 }
        ],
        image: yellow
      }
    ]
  };
  
  export default productData;
  