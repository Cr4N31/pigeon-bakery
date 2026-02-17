import { useLocation, useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order || null;

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
        <p>No order details available.</p>
        <button onClick={() => navigate('/')} className="mt-4 bg-black text-white px-4 py-2">Back to shop</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Thank you — order received</h1>

      <div className="mb-4">
        <h2 className="font-semibold">Customer</h2>
        <div>{order.customer.name} — {order.customer.email}</div>
        {order.customer.address && <div className="text-sm">{order.customer.address}</div>}
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Delivery</h2>
        <div>{order.deliveryType}</div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Items</h2>
        <ul className="space-y-2">
          {order.items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 font-bold">Total: ${order.total.toFixed(2)}</div>
      </div>

      <div className="mt-6">
        <button onClick={() => navigate('/')} className="bg-black text-white px-4 py-2">Back to shop</button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
