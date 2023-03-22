import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = ({ obj }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const {
    id,
    imageUrl: image,
    title,
    description,
    address,
    // creator: creatorId,
    // location: coordinates,
  } = obj;

  const style = {
    padding: 0,
  };
  return (
    <>
      <Modal
        obj={{
          show: showMap,
          onCancel: closeMapHandler,
          header: address,
          contentClass: "place-item__modal-content",
          footerClass: "place-item__modal-actions",
          footer: <Button obj={{ onClick: closeMapHandler }}>CLOSE</Button>,
        }}
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card obj={{ style: style }}>
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button obj={{ inverse: true, onClick: openMapHandler }}>
              VIEW ON MAP
            </Button>
            <Button obj={{ to: `/places/${id}` }}>EDIT</Button>
            <Button obj={{ danger: true }}>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
