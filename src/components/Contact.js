import React, { useState, useEffect} from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log("form submited");
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="Contact mt-5">
      <h1 className="text-center mb-5">Contact Me</h1>
      <form>
        <p className="mb-5" type="Name:"><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input></p>
        <p className="mb-5" type="Email:"><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input></p>
        <p type="Message:"><textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea></p>
      </form>
      <button className="mt-5 text-right" onClick={handleSubmit}>Send Message</button>
    </div>
  );
}

export default Contact;
