// src/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Me:</h2>
      <form>
        <label>Name: <input type="text" name="name" /></label><br />
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Query: <input type="text" name="query" /></label><br />
        <button type="submit">Submit</button>
      </form>

      {/* Social Media Links */}
      <h3>Also Connect with me on Social Media:</h3>
    
  
        
    </div>
  );
}

export default Contact;
