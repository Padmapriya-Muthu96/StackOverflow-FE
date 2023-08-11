import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";


const Users = () => {
    const [myUsers, setMyUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/stack/users`);
          const fetchedUsers = res.data.users;
          setMyUsers(fetchedUsers);
        } catch (error) {
          console.log('Error fetching user data. Please try again later.')
        }
      };
      fetchUsers();
    }, []);
 return (
    <div className="cardsof-user">
    <h1>Users</h1>
    <p>Our Users are,</p>
    <div className="users-container">
    <div className="row">
      {myUsers.map((users, index) => (
        <Card  className="users-card col-md-4 " key={index} >
          
          
          <Card.Body style={{backgroundColor:"rgb(228, 191, 191)"}}>
          
          <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU' style={{ width: '150px', height: '150px', margin: '1rem' }}/>
            <Card.Text>User Name: {users.username}</Card.Text>
            <Card.Text>User Id: {users._id}</Card.Text>
            <Card.Text>User Email: {users.email}</Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
    
  </div>
  );
};

export default Users;