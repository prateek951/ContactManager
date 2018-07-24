import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id : 1,
          name: "John Doe",
          email: "me@example.com",
          phone: "555-555-555"
        },
        { id : 2,
          name: "Prateek Madaan",
          email: "prince.cenation@gmail.com",
          phone: "222-222-222"
        },
        { id : 3,
          name: "Somewhere",
          email: "some@where.com",
          phone: "232-232-232"
        }
      ]
    };
  }

 deleteClickHandler(id) {
    const { contacts } = this.state;        //original 
    const filteredcontacts = contacts.filter(contact => contact.id !== id); //copy removed id one
    //assign copy to original (immutable manner)
    this.setState({contacts: filteredcontacts});
}

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
          deleteClickHandler = {this.deleteClickHandler.bind(this,contact.id)}
        />
      ));
    } else {
      jsx = "No contacts to display";
    }

    return <React.Fragment>{jsx}</React.Fragment>;
  }
}
