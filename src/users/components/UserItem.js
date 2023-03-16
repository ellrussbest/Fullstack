/**
 * We use Link from react router dom because the normal achor tags makes the page reload
 * and we don't want that.
 */
import Avatar from "../../shared/UIElements/Avatar";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Card from "../../shared/UIElements/Card";

const UserItem = ({ user }) => {
  const { id, name, image, places: placeCount } = user;
  const style = {
    padding: 0
  }

  return (
    <li className="user-item">
        <Card style={style}>
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {placeCount} {placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
    </li>
  );
};

export default UserItem;
