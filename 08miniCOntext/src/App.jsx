import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
/*
1.context is basically setting data in this global variable so that we can use it and take it from anywherre but that brings up lot of state-msimatch 
2.after making the context we also have to make a provider ( userCOntextProvider) which would be a jsx file because it would be at the top hence it needs to be in the jsx format 
*/
