import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from './userSlice';

const DeleteUser = () => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        // Assume user ID is available in session storage or Redux
        const userId = sessionStorage.getItem('userId');
        await fetch(`https://fakestoreapi.com/users/${userId}`, {
          method: 'DELETE',
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        dispatch(clearUser()); // Clear user data from Redux store
        window.location.href = '/'; // Redirect to home
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteUser;
