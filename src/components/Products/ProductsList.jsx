import products from "../../data/products";
import { useState } from "react";
import { useCart } from "../Cart/CartContext";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { addToCart } = useCart();
  const [counts, setCounts] = useState({});

  const increaseCount = (id) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));

  const decreaseCount = (id) =>
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-16">
      {products.map((product) => {
        const quantity = counts[product.id] || 1;

        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantity}
            onIncrease={() => increaseCount(product.id)}
            onDecrease={() => decreaseCount(product.id)}
            onAddToCart={() => addToCart({ ...product, quantity })}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;
