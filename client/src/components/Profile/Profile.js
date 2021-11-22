import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currUser } = useSelector((state) => state);
  console.log(currUser);
  return <div>{currUser.login}</div>;
};

export default Profile;
