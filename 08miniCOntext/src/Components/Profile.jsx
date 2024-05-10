import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); //here we will take data instead of the function

  //here we will do conditional return  not simple return

  if (!user) return <div>please login!</div>;
  return <div>hey {user.username}</div>;
}

export default Profile;
