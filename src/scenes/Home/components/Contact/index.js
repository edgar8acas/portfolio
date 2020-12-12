import React, { useState } from "react";
import "./styles.css";

function Contact() {
  return (
    <section className="site-section">
      <h2 id="contact">Contact</h2>
      <ContactForm />
    </section>
  );
}

export const ContactForm = () => {

  const initialState = {
    name: "",
    email: "",
    message: ""
  }
  const [contact, setContact] = useState(initialState)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { email, message, name } = event.target;
    setIsLoading(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        email: email.value,
        message: message.value,
        name: name.value
      })
    }).then((res) => {
      if (res.ok) {
        setSuccess(true)
        setContact(initialState)
      } else {
        setError(true)
      }
      setIsLoading(false)
    })
  }

  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }

  return (
    <>
      <p>Let's get in touch!</p>
      { error && <p className="error">Oops! There was an error, try again</p>}
      { success && <p className="success">Your message was sent, thank you!</p>}
      <form className="contact-form" data-netlify="true" name="contactForm" onSubmit={handleSubmit} >
        <label>Name</label>
        <input name="name" type="text" value={contact.name} onChange={handleChange} required />
        <label>Email</label>
        <input name="email" type="email" value={contact.email} onChange={handleChange} required />
        <label>Message</label>
        <textarea name="message" rows={3} value={contact.message} onChange={handleChange} required />
        <button type="submit" className={isLoading ? "loading" : null} disabled={isLoading}>Send</button>
      </form>
    </>
  );
}

export default Contact;
