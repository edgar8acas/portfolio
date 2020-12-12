import React from "react";
import "./styles.css";

function Contact() {
  return (
    <section className="site-section">
      <h2 id="contact">Contact</h2>
      <p>Let's get in touch!</p>
      <form className="contact-form" netlify name="contact">
        <label>Name</label>
        <input name="name" type="text" />
        <label>Email</label>
        <input name="email" type="email" />
        <label>Message</label>
        <textarea name="message" rows={3} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
