import { useContext, useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

import "./PlaceItem.css";
import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = ({ obj }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting...");
  };
  const {
    id,
    image,
    title,
    description,
    address,
    // creator: creatorId,
    location: coordinates,
  } = obj || {};

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
          <Map
            obj={{
              center: coordinates,
              zoom: 16,
            }}
          />
        </div>
      </Modal>

      <Modal
        obj={{
          show: showConfirmModal,
          onCancel: cancelDeleteHandler,
          header: "Are you sure?",
          footerClass: "place-item__modal-actions",
          footer: (
            <>
              <Button obj={{ inverse: true, onClick: cancelDeleteHandler }}>
                CANCEL
              </Button>
              <Button obj={{ danger: true, onClick: confirmDeleteHandler }}>
                DELETE
              </Button>
            </>
          ),
        }}
      >
        <p>
          Do you want to proceed and delete this place? Please not that it can't
          be undone therearefter
        </p>
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
            {isLoggedIn && <Button obj={{ to: `/places/${id}` }}>EDIT</Button>}
            {isLoggedIn && (
              <Button obj={{ danger: true, onClick: showDeleteWarningHandler }}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
