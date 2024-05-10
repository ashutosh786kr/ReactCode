import React from "react";

const UserContext = React.createContext();

export default UserContext; //throwing this variable as in output

/*
har ek context ek provider deta hai
kyunki har ek context ek variable provide hi toh karta hia\
eventually hence iska hum ek wrapper laagyenge 
toh fir yeh banjayega ek provider, so basically all the component inside this provider 
wrapper will get  the access of the UserContext 

*/
