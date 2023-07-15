import React, { FC } from "react";
import { useFetchers } from "../hooks/useUsers";
import List from "./List";
import { IUser } from "../../types/types";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";
type Props = {};
export const UserPage: FC<Props> = (props) => {
  const { users } = useFetchers();
  const navigate = useNavigate();
  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            onClick={(user) => navigate("/users/id/" + user.id)}
            key={user.id}
          />
        )}
      />
    </div>
  );
};
