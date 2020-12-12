import React, { useState } from "react";
import "./styles.css";

function Contact() {
  return (
    <section className="site-section">
      <h2 id="contact">Contact</h2>
      <p>Let's get in touch!</p>
      <ContactForm />
    </section>
  );
}

export const ContactForm = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  })

  function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { email, message, name } = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        email: email.value,
        message: message.value,
        name: name.value
      })
    })
  }

  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }

  return (
    <form className="contact-form" data-netlify="true" name="contactForm" onSubmit={handleSubmit} >
      <label>Name</label>
      <input name="name" type="text" value={contact.name} onChange={handleChange} />
      <label>Email</label>
      <input name="email" type="email" value={contact.email} onChange={handleChange} />
      <label>Message</label>
      <textarea name="message" rows={3} value={contact.message} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
