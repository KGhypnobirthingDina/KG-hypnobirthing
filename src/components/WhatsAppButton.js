import React from "react";

const WhatsAppButton = () => {
  const sendMessage = () => {
    const phoneNumber = "972503500223"; // Replace with the recipient's phone number including country code
    const message = "היי אשמח לשמוע פרטים נוספים לגבי הקורס הכנה ללידה";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  };

  return (
    <button
      onClick={sendMessage}
      style={{
        padding: "10px 20px",
        backgroundColor: "#25D366",
        marginBottom: "10px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      שליחת הודעה לווצאפ
    </button>
  );
};

export default WhatsAppButton;
