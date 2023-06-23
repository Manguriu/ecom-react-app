import React, { Component, Fragment } from "react";

export class Profile extends Component {
  render() {
    return (
      <Fragment >
        <h1 className="mt-4 p-4">User Profile Details</h1>
        <ul className="list-group">
          <li className="list-group-item">Name:</li>
          <li className="list-group-item">Email:</li>
        </ul>
      </Fragment>
    );
  }
}

export default Profile;
