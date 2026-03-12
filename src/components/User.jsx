import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const User = () => {
  const userName = useContext(UserContext);
  return (
    <div>
      <h3>Hello {userName.toUpperCase()}</h3>
    </div>
  );
};

export default User;
