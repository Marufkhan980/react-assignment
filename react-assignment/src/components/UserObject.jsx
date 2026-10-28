import { useState } from "react";

function UserObject() {
  const [user, setUser] = useState({
    name: "Monib",
    age: 25,
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Rahim", // new name
    });
  };

  return (
    <div className="card">
      <h2>Task 5: Object Update</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default UserObject;