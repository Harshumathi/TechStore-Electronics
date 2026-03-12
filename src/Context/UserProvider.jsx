import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const user = "Harshumathi";
  //render the children
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
