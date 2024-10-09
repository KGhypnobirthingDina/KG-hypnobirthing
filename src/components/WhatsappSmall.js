import React from "react";
import whatsAppIcon from "../WhatsAppIcon.svg";
import styles from "../components/WhatsappSmall.module.css";
const WhatsappSmall = () => {
  const sendMessage = () => {
    const phoneNumber = "972503500223"; // Replace with the recipient's phone number including country code
    const message = "היי אשמח לשמוע פרטים נוספים לגבי הקורס הכנה ללידה";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  };

  return (
    <div className={styles.container}>
      <img src={whatsAppIcon} onClick={sendMessage} />
    </div>
  );
};

export default WhatsappSmall;
