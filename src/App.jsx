// import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>hello</h1>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <h2 className="bg-red-700 text-3xl border-green-800 border-8">
//         Tailwind css setup
//       </h2>
//     </div>
//   );
// }

// export default App;
import React from "react";

const products = [
  {
    id: 1,
    name: "Elegant Lace Wedding Dress",
    price: "$299",
    image: "/pic1.jpg",
  },
  {
    id: 2,
    name: "Classic Satin Bridal Gown",
    price: "$349",
    image: "/pic2.jpg",
  },
  {
    id: 3,
    name: "Modern Prom Dress - Red",
    price: "$199",
    image: "/pic3.jpg",
  },
  {
    id: 4,
    name: "Bridesmaid Dress - Dusty Rose",
    price: "$159",
    image: "/pic4.jpg",
  },
  {
    id: 5,
    name: "Ready to Ship Dress",
    price: "$129",
    image: "/pic5.jpg",
  },
  {
    id: 6,
    name: "Occasion Gown - Royal Blue",
    price: "$189",
    image: "/pic6.jpg",
  },
];

const App = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Shop Our Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700">
                {product.name}
              </h2>
              <p className="text-pink-600 font-medium mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
