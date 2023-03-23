import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        obj={{
          type: "text",
          label: "Title",
          element: "input",
          validators: [],
          errorText: "Please enter a valid text",
          // onChange:
        }}
      />
    </form>
  );
};

export default NewPlace;
