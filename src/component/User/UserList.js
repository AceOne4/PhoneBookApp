import React from "react";
import UserCard from "./UserCard";
function UserList({ Users, ...res }) {
  const UsersData = Users.map((user) => (
    <UserCard key={user.id} {...user} {...res} />
  ));
  return <>{UsersData}</>;
}

export default UserList;
