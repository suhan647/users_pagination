import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.FirstNameLastName}</h2>
      <p>Email: {user.Email}</p>
      <p>Phone: {user.Phone}</p>
    </div>
  );
}

export default UserCard;