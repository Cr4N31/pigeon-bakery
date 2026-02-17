import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import * as emailjs from "@emailjs/browser";

function Checkout({ user: initialUser }) {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const userFromStorage = typeof window !== "undefined" && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const user = initialUser || userFromStorage || { name: "", email: "" };

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [address, setAddress] = useState("");
  const [deliveryType, setDeliveryType] = useState("free-delivery");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) {
      alert("Please provide name and email.");
      return;
    }

    if (deliveryType === "free-delivery" && !address) {
      alert("Please enter your address for free delivery (Baytown or Mont Belvieu, TX).");
      return;
    }

    const order = {
      customer: { name, email, address },
      deliveryType,
      items: cart,
      total,
      createdAt: new Date().toISOString(),
    };

    // Try to send via EmailJS if env vars are configured (Vite: VITE_EMAILJS_*).
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const emailBody = {
      customer_name: name,
      customer_email: email,
      customer_address: address,
      delivery_type: deliveryType,
      items: order.items.map(i => `${i.title} x${i.quantity} ($${(i.price * i.quantity).toFixed(2)})`).join('\n'),
      total: `$${order.total.toFixed(2)}`,
      created_at: order.createdAt,
    };

    async function sendEmailJS() {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailBody, PUBLIC_KEY);
        alert("Order emailed to the shop owner. Thank you!");
        clearCart();
        navigate("/order-confirmation", { state: { order } });
      } catch (err) {
        console.error("EmailJS send error:", err);
        alert("Failed to send email via EmailJS. Opening email client as fallback.");
        openMailClient();
        navigate("/order-confirmation", { state: { order } });
      }
    }

    function openMailClient() {
      const subject = encodeURIComponent(`New order from ${name}`);
      const body = encodeURIComponent(
        `Customer: ${name}\nEmail: ${email}\nAddress: ${address}\nDelivery: ${deliveryType}\n\nItems:\n${emailBody.items}\n\nTotal: ${emailBody.total}\n\nPlaced at: ${order.createdAt}`
      );
      const receiver = import.meta.env.RECEIVER_EMAIL || 'cephascrane42@gmail.com';
      window.location.href = `mailto:${receiver}?subject=${subject}&body=${body}`;
    }

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      sendEmailJS();
    } else {
      // Fallback: open user's mail client with prefilled order (requires user to send)
      openMailClient();
      navigate('/order-confirmation', { state: { order } });
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold mb-2">Items</h2>
            <ul className="space-y-2">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-4 border rounded">
            <h2 className="font-semibold mb-2">Your details</h2>

            <label className="block text-sm">Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full mb-2 border px-2 py-1"
            />

            <label className="block text-sm">Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full mb-2 border px-2 py-1"
            />

            <fieldset className="mb-2">
              <legend className="font-medium">Delivery type</legend>
              <label className="block">
                <input
                  type="radio"
                  name="delivery"
                  value="free-delivery"
                  checked={deliveryType === "free-delivery"}
                  onChange={e => setDeliveryType(e.target.value)}
                />{' '}
                Free Delivery (Baytown or Mont Belvieu, TX)
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="delivery"
                  value="pickup-baytown"
                  checked={deliveryType === "pickup-baytown"}
                  onChange={e => setDeliveryType(e.target.value)}
                />{' '}
                Pick Up — Baytown, TX
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="delivery"
                  value="pickup-montbelvieu"
                  checked={deliveryType === "pickup-montbelvieu"}
                  onChange={e => setDeliveryType(e.target.value)}
                />{' '}
                Pick Up — Mont Belvieu, TX
              </label>
            </fieldset>

            <label className="block text-sm">Address</label>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Street address, city, ZIP"
              className="w-full mb-3 border px-2 py-1"
            />

            <button
              type="submit"
              disabled={cart.length === 0}
              className="bg-black text-white px-4 py-2 disabled:opacity-50"
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;
