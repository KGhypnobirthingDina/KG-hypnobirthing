import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import WhatsAppButton from "./WhatsAppButton";

function Contact({ style }) {
  const [showContact, setShowContact] = useState(false);
  const [inputType, setInputType] = useState("text");
  const form = useRef();

  function handleShowContact() {
    setShowContact(!showContact);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzqr0ci", // Your EmailJS service ID
        "template_l4tjf4p", // Your EmailJS template ID
        form.current,
        "WQYsexo-1gYfk-f-o" // Your EmailJS public key
      )
      .then(
        () => {
          alert("הפרטים נשלחו בהצלחה");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (style === "style") {
      setShowContact(true);
    }
  }, [style]);

  return (
    <div className={style === "style" ? styles.style : styles.container}>
      {!showContact && (
        <button onClick={handleShowContact} className={styles.b}>
          צרו קשר
        </button>
      )}
      {showContact && (
        <section>
          <h1>צרו קשר</h1>
          <WhatsAppButton className={styles.WhatsAppButton} />
          <h2>אימייל</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="שם מלא*"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="אימייל*"
              name="user_email"
              required
            />
            <input
              type="number"
              placeholder="מספר טלפון*"
              name="number"
              required
            />
            <input type="text" placeholder="שבוע הריון" name="pregnant_week" />
            <input
              type={inputType}
              onFocus={() => setInputType("date")}
              onBlur={(e) => e.target.value === "" && setInputType("text")}
              placeholder="תאריך לידה משוער"
              name="birth_date"
            />
            <textarea name="message" placeholder="ההודעה שלך"></textarea>
            <button type="submit">שליחת אימייל</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default Contact;
