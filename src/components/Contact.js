import React from "react";
import PropTypes from "prop-types";
//import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      online: this.props.online,
    };
  }

  toggleOnlineState() {
    const newOnlineState = !this.state.online;
    this.setState({ online: newOnlineState });
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.src} />

        <div>
          <h1 className="name">{this.props.name}</h1>

          <div className="status" onClick={() => this.toggleOnlineState()}>
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <div className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  online: PropTypes.bool,
};
