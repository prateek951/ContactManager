import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: true
    };
    this.bindEvents();
  }
  bindEvents() {
    // add all the bindings here in the bindEvents
    this.onShowClick = this.onShowClick.bind(this);
  }
  onShowClick(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      showContactInfo: !this.state.showContactInfo
    });
  }
  onDeleteClick = (id,dispatch) => {
    dispatch({type: 'DELETE_CONTACT',payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
            const { dispatch } =  value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this,id,dispatch)}
                />
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Phone : {phone}</li>
                  <li className="list-group-item">Email : {email}</li>
                </ul>
              ) : (
                ""
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
