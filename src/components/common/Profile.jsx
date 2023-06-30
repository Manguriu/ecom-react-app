import React, { Component, Fragment } from "react";

export class Profile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    return (
      <Fragment>
        <h1 className="mt-4 p-4">User Profile Details</h1>
        <ul className="list-group">
          Name :<li className="list-group-item uppercase-text"> {name}</li>
          Email:<li className="list-group-item uppercase-text"> {email}</li>
        </ul>
      </Fragment>
    );
  }
}

export default Profile;
