import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { data } = useContext(UserContext);

  if (!data) return <div>Login First</div>;
  
  return <div>Welcome! {data.name}</div>
};

export default Profile;
