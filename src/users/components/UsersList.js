import Card from "../../shared/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = ({ items }) => {
  return items.length === 0 ? (
    <div className="center">
      {" "}
      <Card>
        <h2>No users found.</h2>
      </Card>
    </div>
  ) : (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
