import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("user", user);
  if (!user) return <div>Please login with credentials</div>;
  return <div>Welcome <b>{user.username}</b> to the Project X</div>;
};

export default Profile;
