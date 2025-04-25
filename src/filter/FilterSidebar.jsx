import React, { useState, useRef } from "react";

const FilterSidebar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState(0); // Initial position
  const sidebarRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX;
    const startPosition = sidebarPosition;

    const handleMouseMove = (e) => {
      if (isDragging) {
        const newPos = startPosition + (e.clientX - startX);
        setSidebarPosition(newPos); // Update position as sidebar is dragged
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={sidebarRef}
      className="w-64 bg-white shadow-lg p-8 overflow-y-auto h-full" // Set height to 100% of the container
      style={{ left: sidebarPosition }} // Dynamically update position
      onMouseDown={handleMouseDown} // Handle drag start
    >
      <h2 className="text-2xl font-semibold mb-6">Filter Products</h2>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Price</h3>
        <div className="flex items-center">
          <input
            type="number"
            className="border p-3 rounded-l-md w-28"
            placeholder="Min"
          />
          <span className="mx-3">-</span>
          <input
            type="number"
            className="border p-3 rounded-r-md w-28"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Color</h3>
        <div className="space-y-3">
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Ivory
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> White
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Black
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Champagne
          </label>
        </div>
      </div>

      {/* Fabric Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Fabric</h3>
        <div className="space-y-3">
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Satin
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Lace
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Chiffon
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Tulle
          </label>
        </div>
      </div>

      {/* Additional Filters */}
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Category</h3>
        <div className="space-y-3">
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Bridal
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Evening
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> Casual
          </label>
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Size</h3>
        <div className="space-y-3">
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> XS
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> S
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> M
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> L
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> XL
          </label>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-4">Rating</h3>
        <div className="space-y-3">
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> 1 Star
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> 2 Stars
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> 3 Stars
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> 4 Stars
          </label>
          <label className="block text-lg">
            <input type="checkbox" className="mr-3" /> 5 Stars
          </label>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 text-lg">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
