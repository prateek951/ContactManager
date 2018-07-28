import React, { Component } from "react";


// This is the uncontrolled component
class AddContact_ref extends Component {
  
  constructor(props){
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
  }
  
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name : this.nameInput.current.value,
      email : this.emailInput.current.value
    }
    console.log('inside the onSubmit method....',contact);
  };

  static defaultProps = {
      name: 'XYZ',
      email: 'xyz@xyz.com',
      phone: '777-777-777'
  }


  render() {
    const { email, name, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact_ref;
