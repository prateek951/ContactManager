import React, { Component } from "react";
import axios from "axios";
//Create Context

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      const contacts = [...state.contacts];
      contacts.push(action.payload.contact);
      return { ...state, contacts: contacts };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ contacts: response.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//Export consumer here
export const Consumer = Context.Consumer;
