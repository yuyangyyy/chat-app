import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.src} />

      <div>
        <h1 className="name">{props.name}</h1>

        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <div className="status-text">
            {props.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  online: PropTypes.bool
};

export default Contact;
