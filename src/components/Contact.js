import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    constructor(){
        super();
        this.state = {
          showContactInfo: true
        };
        this.bindEvents();
    }
    bindEvents(){
        // add all the bindings here in the bindEvents
        this.onShowClick = this.onShowClick.bind(this);
    }
    onShowClick(e) {
        e.preventDefault();
        this.setState({...this.state,showContactInfo: !this.state.showContactInfo});
    }

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i className="fas fa-sort-down" onClick={this.onShowClick}/>
        </h4>
        {this.state.showContactInfo? 
        (
        <ul className="list-group">
          <li className="list-group-item">Phone : {phone}</li>
          <li className="list-group-item">Email : {email}</li>
        </ul>
        ) : ''}
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
