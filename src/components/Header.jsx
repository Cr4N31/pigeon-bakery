import CartIcon from '../assets/cart-shopping-svgrepo-com.svg';
import { useCart } from './Cart/CartContext';

function Header({ user }) {
  const { toggleCart, cartCount } = useCart();

  return (
    <header className="bg-white fixed top-0 left-0 right-0 border-b border-gray-200">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-500">
          Uniflow
        </h1>

        {/* Search */}
        <div className="flex items-center gap-2">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600 transition">
            Search
          </button>
        </div>

        {/* Account + Cart */}
        <div className="flex items-center gap-6">

          <button className="border border-teal-500 text-teal-500 px-4 py-1 rounded-md hover:bg-teal-50 transition">
            {!user ? "Login" : "My Account"}
          </button>

          <button
            onClick={toggleCart}
            className="relative flex items-center"
          >
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}

            <img
              src={CartIcon}
              alt="cart"
              className="w-6 h-6"
            />
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Header;
