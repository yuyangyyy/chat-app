import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        alt="picture"
        src="https://randomuser.me/api/portraits/women/88.jpg"
      />

      <div>
        <h1 className="name">Anitala</h1>

        <div className="status">
          <div className="status-online"></div>
          <div className="status-text">Online</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
