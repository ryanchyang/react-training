import React, { useState, useEffect } from 'react';
import rawData from '../data/users.json';
// import './UserList.css';

function UserList(props) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  });

  // 從伺服器載入資料
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  const fetchFilterUser = async keyword => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?name_like=' + keyword
    );
    const data = await response.json();
    setUsers(data);
  };

  // didMount
  useEffect(() => {
    // 開啟載入指示器
    setLoading(true);

    // 戴入資料
    // setUsers(rawData);
    fetchUser();

    // 2秒後關起指示器
  }, []);

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const userListTable = (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <input
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // 開啟載入資料指示
          setLoading(true);
          // 載入資料(ajax/fetch...)
          fetchFilterUser(search);
        }}
      >
        Search
      </button>
      <div className="container">
        <div className="center">{loading ? spinner : userListTable}</div>
      </div>
    </>
  );
}

export default UserList;
