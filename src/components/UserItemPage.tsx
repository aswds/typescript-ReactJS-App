import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../types/types";
import { useParams, useNavigate } from "react-router-dom";
type Props = {};
type UserItemPageParams = {
  id: string;
};
const UserItemPage: React.FC<Props> = (props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const params = useParams<UserItemPageParams>();
  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e: unknown) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUser();
  });
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>{user?.name}'s page</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  );
};

export default UserItemPage;
