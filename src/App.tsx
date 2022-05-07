import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import type { User } from "./types/user";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);
   return (
     <div>
       <ListItem id={1} name={"user_name"} age={25} hobbies={["sports", "Youtube", "Instagram"]} />
       <ListItem id={1} name={"user_name2"} age={25} personal_color={"pink"} />
     </div>
   );
};
