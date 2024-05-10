import React from "react";
import UserContext from "./UserContext";

//UserContextProvider is a function

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
/* 
children is nothing magical but the divs only are called children 
its just a generic name 

//yahi pe api access  and jo data mila gya hai woh utha ke provider value mein throw   kardo

provider value = this here is passed with an object which gives the access of the user & setUser hence {user,setUser}
*/
