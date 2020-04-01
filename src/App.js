import React from "react";
import Contact from "./components/Contact";
import "./components/Contact.css";

function App() {
  return (
    <div>
      <Contact
        name="Anitala"
        src="https://randomuser.me/api/portraits/women/88.jpg"
        online={true}
      />

      <Contact
        name="Jims"
        src="https://randomuser.me/api/portraits/men/36.jpg"
        online={false}
      />

      <Contact
        name="Peppa"
        src="https://randomuser.me/api/portraits/women/35.jpg"
        online={true}
      />
    </div>
  );
}

export default App;
