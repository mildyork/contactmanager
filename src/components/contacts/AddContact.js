import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import _ from "lodash";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    let errors = {};

    if (name === "") {
      errors = { name: "Name is required" };
    }
    if (email === "") {
      errors = { ...errors, email: "Email is required" };
    }
    if (phone === "") {
      errors = { ...errors, phone: "Phone is required" };
    }

    console.log(_.isEmpty(errors));

    if (!_.isEmpty(errors)) {
      this.setState({ errors: errors });
    } else {
      const newContact = {
        name,
        email,
        phone
      };

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newContact
      );

      dispatch({ type: "ADD_CONTACT", payload: res.data });
      this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {}
      });

      this.props.history.push("/");
    }
  };
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
                    placeholder="Enter Name..."
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    placeholder="Enter Email..."
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    placeholder="Enter Phone..."
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-lg btn-light btn-block"
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
