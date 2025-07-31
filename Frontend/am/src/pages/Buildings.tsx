import React from 'react';
import Table from '../components/table/Table';
import AnimatedPage from "../components/AnimatedPage";
import './Pages.css'

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Buildings: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 24, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  const userHeaders = ['ID', 'Name', 'Age', 'Email'];

  const renderUserRow = (user: User) => (
    <>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.email}</td>
    </>
  );

  return (
    <AnimatedPage>
      <div className='page-box'>
        <h1>User List</h1>
        <Table headers={userHeaders} data={users} renderRow={renderUserRow} />
      </div>
    </AnimatedPage>
  );
};

export default Buildings;