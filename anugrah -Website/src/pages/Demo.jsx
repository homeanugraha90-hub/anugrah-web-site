import { useState } from "react";

const Demo = () => {
  const [orderItems, setOrderItems] = useState([
    { name: "Organic Apples", qty: 10, rate: 1000 },
    { name: "Fresh Mangoes", qty: 10, rate: 1000 },
    { name: "Banana Bunch", qty: 10, rate: 1000 },
  ]);

  const shipping = 500;
  const taxRate = 0.205; // 20.5%
  const discountRate = 0.05; // 5%

  const subtotal = orderItems.reduce((acc, item) => acc + item.qty * item.rate, 0);
  const tax = subtotal * taxRate;
  const discount = subtotal * discountRate;
  const total = subtotal + tax + shipping - discount;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

      {/* Items Table */}
      <table className="w-full mb-6 text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-3">Description</th>
            <th className="text-right py-2 px-3">Rate (₹)</th>
            <th className="text-right py-2 px-3">Qty</th>
            <th className="text-right py-2 px-3">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, i) => (
            <tr key={i} className="border-t">
              <td className="py-2 px-3">{item.name}</td>
              <td className="py-2 px-3 text-right">{item.rate.toFixed(2)}</td>
              <td className="py-2 px-3 text-right">{item.qty}</td>
              <td className="py-2 px-3 text-right">
                {(item.qty * item.rate).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (20.5%):</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (5%):</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
