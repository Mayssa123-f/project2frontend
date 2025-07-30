"use client";
export default function PaymentInfoTable() {
  const paymentMethods = [
    {
      method: "Credit/Debit Card",
      amount: "$100",
      delivery: "Instant (E-ticket via email)",
      notes: "Secure online payment",
    },
    {
      method: "Bank Transfer",
      amount: "$100",
      delivery: "2-3 business days",
      notes: "Please send proof of payment",
    },
    {
      method: "Cash on Arrival",
      amount: "$100",
      delivery: "At the venue",
      notes: "Pay in person on check-in",
    },
    {
      method: "Mobile Wallet",
      amount: "$100",
      delivery: "Instant",
      notes: "Supports Apple Pay & Google Pay",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Payment Methods & Ticket Info
      </h2>

      {/* Add responsive wrapper here */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-4 py-2">
                Payment Method
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Amount Required
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Ticket Delivery Time
              </th>
              <th className="border border-gray-300 px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map(({ method, amount, delivery, notes }, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{method}</td>
                <td className="border border-gray-300 px-4 py-2">{amount}</td>
                <td className="border border-gray-300 px-4 py-2">{delivery}</td>
                <td className="border border-gray-300 px-4 py-2">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
