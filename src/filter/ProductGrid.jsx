import React from "react";
import { FaHeart, FaCartPlus, FaSearch } from "react-icons/fa"; // Import icons from React Icons

const ProductGrid = () => {
  const items = [
    {
      name: "Elegant Long Sleeve Lace Short Wedding Dress",
      price: "$169.99",
      image: "pic1.jpg",
    },
    {
      name: "Fashion One-Shoulder Wedding Dress",
      price: "$198.00",
      image: "pic2.jpg",
    },
    {
      name: "Chic Satin Wedding Dress",
      price: "$179.00",
      image: "pic3.jpg",
    },
    {
      name: "Bridal Tulle Wedding Dress",
      price: "$159.00",
      image: "pic4.jpg",
    },
    {
      name: "Vintage Lace Wedding Dress",
      price: "$220.00",
      image: "pic5.jpg",
    },
    {
      name: "Chic Strapless Wedding Dress",
      price: "$210.00",
      image: "pic6.jpg",
    },
    {
      name: "A-Line Wedding Dress",
      price: "$250.00",
      image: "pic7.jpg",
    },
    {
      name: "Princess Ball Gown Wedding Dress",
      price: "$300.00",
      image: "pic8.jpg",
    },
    {
      name: "Mermaid Wedding Dress",
      price: "$280.00",
      image: "pic9.jpg",
    },
    {
      name: "Boho Lace Wedding Dress",
      price: "$210.00",
      image: "pic1.jpg",
    },
    {
      name: "Luxury Wedding Dress",
      price: "$350.00",
      image: "pic2.jpg",
    },
    {
      name: "Floral Embroidery Wedding Dress",
      price: "$180.00",
      image: "pic3.jpg",
    },
    {
      name: "Sweetheart Neckline Wedding Dress",
      price: "$240.00",
      image: "pic5.jpg",
    },
    {
      name: "Vintage Wedding Dress",
      price: "$160.00",
      image: "pic6.jpg",
    },
    {
      name: "Modern Wedding Dress",
      price: "$190.00",
      image: "pic7.jpg",
    },
    {
      name: "Luxury Satin Wedding Dress",
      price: "$210.00",
      image: "pic8.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          {/* Product Image with Icons */}
          <div className="relative">
            {/* Heart Icon */}
            <FaHeart className="absolute top-2 left-2 text-white text-xl bg-red-500 rounded-full p-1 cursor-pointer hover:bg-red-600" />

            {/* Cart Icon */}
            <FaCartPlus className="absolute top-2 right-2 text-white text-xl bg-green-500 rounded-full p-1 cursor-pointer hover:bg-green-600" />

            {/* Magnifying Glass Icon */}
            <FaSearch className="absolute bottom-2 right-2 text-white text-xl bg-gray-500 rounded-full p-1 cursor-pointer hover:bg-gray-600" />

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>

          {/* Product Info */}
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
