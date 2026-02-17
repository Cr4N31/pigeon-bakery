function ProductCard({ product, quantity, onIncrease, onDecrease, onAddToCart }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition duration-300">
      
      <img
        src={product.img}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />

      <h2 className="text-stone-800 font-semibold text-lg mb-1">
        {product.title}
      </h2>

      <h3 className="text-stone-700 font-medium text-md mb-2">
        ${product.price}
      </h3>

      <p className="text-stone-600 mb-3 text-center leading-relaxed">
        {product.desc}
      </p>

      <p className={product.inStock ? "text-emerald-600 font-medium" : "text-rose-500 font-semibold"}>
        {product.inStock ? "Freshly Available" : "Currently Sold Out"}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-3 my-3">
        <button
          disabled={!product.inStock}
          onClick={onDecrease}
          className={`px-3 py-1 rounded-full text-sm ${
            product.inStock
              ? "bg-stone-100 text-stone-800 hover:bg-stone-200 transition"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          −
        </button>

        <p className="w-6 text-center text-stone-700 font-medium">
          {quantity}
        </p>

        <button
          disabled={!product.inStock}
          onClick={onIncrease}
          className={`px-3 py-1 rounded-full text-sm ${
            product.inStock
              ? "bg-stone-100 text-stone-800 hover:bg-stone-200 transition"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        disabled={!product.inStock}
        onClick={onAddToCart}
        className={`px-6 py-2 rounded-full font-semibold mt-2 transition duration-300 ${
          product.inStock
            ? "text-white bg-black hover:bg-rose-400 shadow-sm"
            : "bg-stone-300 text-stone-500 cursor-not-allowed"
        }`}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default ProductCard;
