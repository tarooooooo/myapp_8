import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = props => {
  const{ id, name, age, personal_color, hobbies } = props;
  return (
    <p style={{color: personal_color}}>
      {id}:{name}({age}){hobbies?.join("/")}
    </p>
  );
};

ListItem.defaultProps = {
  personal_color: "green"
};
