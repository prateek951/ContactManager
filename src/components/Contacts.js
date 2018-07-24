import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "John Doe",
          email: "me@example.com",
          phone: "555-555-555",
        },
        {
          name: "Prateek Madaan",
          email: "prince.cenation@gmail.com",
          phone: "222-222-222",
        },
        {
          name: "Somewhere",
          email: "some@where.com",
          phone: "232-232-232",
        }
      ],
    };
    this.bindEvents();
  }
  bindEvents = () => {

    };
  

  render() {
    // js
    let jsx = null;
    if (this.state.contacts.length > 0) {
      const { contacts } = this.state;
      jsx = contacts.map((contact, index) => (
        // <Contact
        //   key={index}
        //   name={contact.name}
        //   email={contact.email}
        //   phone={contact.phone}
        // />
        <Contact
          key={index}
          contact={contact}
        />
      ));
    } else {
      jsx = "No contacts to display";
    }

    return <React.Fragment>{jsx}</React.Fragment>;
  }
}
