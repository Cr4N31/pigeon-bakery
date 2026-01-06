function ProductCard({ product, quantity, onIncrease, onDecrease, onAddToCart }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
      <img
        src={product.img}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />

      <h2 className="text-teal-500 font-bold text-lg mb-1">
        {product.title}
      </h2>
      <h3 className="text-teal-500 font-semibold text-md mb-2">
        ${product.price}
      </h3>

      <p className="text-gray-600 mb-2">{product.category}</p>

      <p className={product.inStock ? "text-green-600 font-medium" : "text-red-500 font-bold"}>
        {product.inStock ? "In stock" : "Out of stock"}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-2 my-2">
        <button
          disabled={!product.inStock}
          onClick={onDecrease}
          className={`px-3 py-1 rounded ${
            product.inStock
              ? "bg-white border border-teal-500 text-black hover:bg-teal-500 hover:text-white transition"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          -
        </button>

        <p className="w-6 text-center">{quantity}</p>

        <button
          disabled={!product.inStock}
          onClick={onIncrease}
          className={`px-3 py-1 rounded ${
            product.inStock
              ? "bg-white border border-teal-500 text-black hover:bg-teal-500 hover:text-white transition"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        disabled={!product.inStock}
        onClick={onAddToCart}
        className={`px-4 py-2 rounded font-bold mt-1 ${
          product.inStock
            ? "text-white bg-teal-500 hover:bg-teal-700 transition"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
