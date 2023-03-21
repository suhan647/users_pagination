import React, { useState, useEffect, useCallback } from "react";
import "../App.scss";
import axios from 'axios';
import UserCard from "./UserCard";
 
function Users() {
  const [users, setUsers] = useState([]);
  const [nextId, setNextId] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    const data = await axios.get(`https://give-me-users-forever.vercel.app/api/users/${nextId}/next`)
    const fetchedUsers = data.data.users.slice(0, 10);
    setUsers(fetchedUsers);
    setIsLoading(false);
  }, [nextId]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handlePrev = () => { 
    setNextId(Math.max(nextId - 10, 0));
  };

  const handleNext = () => {
    setNextId(nextId + 10);
  };

  return (
    <div className="app-container">
      <h1 className="title">Users</h1>
      <div className="users-container">

        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          users.map((user) => (
            <UserCard key={user.ID} user={user} />
          ))
        )}
 
      </div>
      <div className="pagination-container">
        <button className="btn-prev" onClick={handlePrev} disabled={nextId === 0}>
          <span>Previous</span>
        </button>
        <button className="btn-next" onClick={handleNext}>
          <span>Next</span>
        </button>
      </div>
    </div> 
  );
}

export default Users;
