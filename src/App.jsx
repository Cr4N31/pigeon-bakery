import { CartProvider, useCart } from "./components/Cart/CartContext";
import ProductLayout from "./components/Products/ProductLayout";
import CartLayout from "./components/Cart/CartLayout";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./components/Cart/OrderConfirmation";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AppContent() {
  const { isCartOpen } = useCart();

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductLayout />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>

      {(() => {
        const location = useLocation();
        const hideOn = ['/checkout', '/order-confirmation'];
        const isHidden = hideOn.some(p => location.pathname.startsWith(p));
        return isCartOpen && !isHidden ? <CartLayout /> : null;
      })()}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
