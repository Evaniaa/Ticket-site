import React from "react";

const ticketOptions = [
  {
    id: 1,
    name: "Regular Ticket",
    price: 5000,
    description: "Access to all main events and exhibitions."
  },
  {
    id: 2,
    name: "Group Ticket (5 Persons)",
    price: 20000,
    description: "Discounted group ticket for 5 attendees."
  },
  {
    id: 3,
    name: "Support/Donate",
    price: null,
    description: "Make a voluntary donation to support our event."
  }
];

export default function Home() {
  const handleBuy = (ticket) => {
    if (ticket.price) {
      const ref = `${ticket.name.replace(/\s/g, "_")}_${Date.now()}`;
      alert(
        `Please make a bank transfer to:\n\n` +
        `Account Number: 8112140111\n` +
        `Account Name: Olajumoke Favour\n` +
        `Amount: ₦${ticket.price.toLocaleString()}\n` +
        `Reference: ${ref}\n\n` +
        `After payment, you will be redirected.`
      );
      window.location.href = `/thank-you?ticket=${encodeURIComponent(ticket.name)}`;
    } else {
      const amount = prompt("Enter amount you wish to donate (₦):");
      if (amount && !isNaN(amount)) {
        const ref = `Donation_${Date.now()}`;
        alert(
          `Please make a bank transfer to:\n\n` +
          `Account Number: 8112140111\n` +
          `Account Name: Olajumoke Favour\n` +
          `Amount: ₦${Number(amount).toLocaleString()}\n` +
          `Reference: ${ref}\n\n` +
          `After payment, you will be redirected.`
        );
        window.location.href = `/thank-you?ticket=Donation`;
      } else {
        alert("Invalid amount entered.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Buy Tickets or Donate</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {ticketOptions.map((ticket) => (
          <div key={ticket.id} className="rounded-2xl shadow-lg bg-white p-6">
            <h2 className="text-2xl font-semibold mb-2">{ticket.name}</h2>
            <p className="text-gray-600 mb-4">{ticket.description}</p>
            {ticket.price && (
              <p className="text-xl font-bold mb-4">₦{ticket.price.toLocaleString()}</p>
            )}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              onClick={() => handleBuy(ticket)}
            >
              {ticket.price ? "Buy Now" : "Donate"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
