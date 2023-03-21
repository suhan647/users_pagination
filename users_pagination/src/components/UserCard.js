import React from "react";
import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="card-header">
        <h2 className="user-name">{user.FirstNameLastName}</h2>
        <p className="job-title">{user.JobTitle}</p>
      </div>
      <div className="card-body">
        <p>Email: <small>{user.Email}</small></p>
        <p>Phone: <small>{user.Phone}</small></p>
        <p>Company:<small> {user.Company}</small></p>
      </div>
    </div>
  );
}

export default UserCard;
