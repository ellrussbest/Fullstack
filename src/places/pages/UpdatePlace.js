import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        obj={{
          id: "title",
          element: "input",
          type: "text",
          label: "Title",
          validators: [VALIDATOR_REQUIRE()],
          errorText: "Please enter a valid title.",
          onInput: () => {},
          value: identifiedPlace.title,
          valid: true,
        }}
      />

      <Input
        obj={{
          id: "description",
          element: "textarea",
          label: "Description",
          validators: [VALIDATOR_MINLENGTH(5)],
          errorText: "Please enter a valid description (min. 5 characters).",
          onInput: () => {},
          value: identifiedPlace.description,
          valid: true,
        }}
      />
      <Button
        obj={{
          type: "submit",
          disabled: true,
        }}
      >
        {" "}
        UPDATE PLACE{" "}
      </Button>
    </form>
  );
};

export default UpdatePlace;
