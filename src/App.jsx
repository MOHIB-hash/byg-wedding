import React from "react";
import Header from "./filter/Header";
import FilterSidebar from "./filter/FilterSidebar";
import ProductGrid from "./filter/ProductGrid";
import Footer from "./filter/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white-50">
      <Header />
      <div className="flex flex-1 mt-[40px]">
        {/* Filter Sidebar */}
        <div className="w-1/4 p-4 h-full">
          <FilterSidebar />
        </div>

        {/* Product Grid */}
        <div className="w-3/4 p-4 h-full overflow-y-auto">
          <ProductGrid />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[2px]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
