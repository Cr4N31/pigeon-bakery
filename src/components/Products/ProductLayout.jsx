import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './ProductRender/Products';
import Home from '../pages/Home';

function ProductLayout() {
  const [currentPage, setCurrentPage] = useState("Products");

  return (
    <div className="min-h-screen flex bg-white">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main content */}
      <main className="flex-1 p-6 md:ml-24 mt-16">
        {currentPage === "Home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "Products" && <Products />}
      </main>
    </div>
  );
}

export default ProductLayout;
