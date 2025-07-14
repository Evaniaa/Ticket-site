import React, { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ticketType = params.get("ticket") || "General";
    const buyerId = Date.now();
    const fileName = `${ticketType.replace(/\s/g, "_")}_${buyerId}.txt`;
    const fileContent = `🎟️ Ticket Confirmation\n\nTicket Type: ${ticketType}\nTicket ID: ${buyerId}\nHolder: Guest\nThank you for your support!`;

    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Thank You for Your Payment!</h1>
      <p className="text-lg mb-4">We appreciate your support. Your ticket has been downloaded automatically.</p>
      <p className="text-md mb-6">To stay updated and receive event details, please join our official WhatsApp group:</p>
      <a
  href="https://wa.me/message/5C4HVBPPFLJSI1"
  target="_blank"
  rel="noreferrer"
        className="bg-green-600 text-white py-2 px-4 rounded-full text-lg hover:bg-green-700"
      >
        Join WhatsApp Group
      </a>
    </div>
  );
}
