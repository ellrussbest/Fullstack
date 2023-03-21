import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = ({ place }) => {
  const {
    id,
    imageUrl: image,
    title,
    description,
    address,
    creator: creatorId,
    location: coordinates,
  } = place;

  const style = {
    padding: 0,
  };

  return (
    <li className="place-item">
      <Card style={style}>
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
