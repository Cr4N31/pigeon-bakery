import { CartProvider } from "./components/Cart/CartContext";
import Products from "./components/Products/Products";
import Header from "./components/Header";
import CartLayout from "./components/Cart/CartLayout";
import { useCart } from "./components/Cart/CartContext";

function AppContent() {
  const { isCartOpen } = useCart();

  return (
    <>
      <Header />
      <Products />

      {/* Cart sidebar */}
      {isCartOpen && <CartLayout />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
