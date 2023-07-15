import React, { FC, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/types";
type Props = {
  user: IUser;
  onClick: (user: IUser) => void;
};
const container: CSSProperties = {
  display: "flex",
  border: "1px solid gray",
  height: "5rem",
  width: "30%",
  marginTop: "1%",
  justifyContent: "center",
  alignItems: "center",
};
const itemStyle: CSSProperties = {
  alignItems: "center",
};
const UserItem: FC<Props> = ({ user, onClick }) => {
  const navigate = useNavigate();
  return (
    <div key={user.id} style={container} onClick={() => onClick(user)}>
      <div>
        {user.id} {user.name}
        living in {user.address.city}
      </div>
    </div>
  );
};

export default UserItem;
