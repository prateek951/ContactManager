import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    //State se uthaao fields ko
    const { name, email, phone } = this.state;
    const { history } = this.props;

    //check for fields validity
    if (name === "") {
      this.setState({ errors: { name: "Name field is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email field is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { email: "Phone field is required" } });
      return;
    }
    const newcontact = { name, email, phone };

    //Reach out to server and create a new contact there
    const pr = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newcontact
    );
    //On getting response dispatch the ADD_CONTACT action to see the changes in the app
    dispatch({ type: "ADD_CONTACT", payload: pr.data });

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
    //Redirect to the contacts page
    history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
