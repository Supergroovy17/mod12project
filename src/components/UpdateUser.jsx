import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Access user from Redux store
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';

const UpdateUser = () => {
  const user = useSelector((state) => state.user); // Get user from Redux store
  const [formData, setFormData] = useState({ ...user });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const updatedUser = await response.json();
      dispatch(setUser(updatedUser)); // Update user in Redux store
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
