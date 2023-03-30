import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    initialInputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    initialFormValidity: false,
  });

  const { isValid, inputs } = formState;


 

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputs); // send this to the backend
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        obj={{
          id: "title",
          type: "text",
          label: "Title",
          element: "input",
          validators: [VALIDATOR_REQUIRE()],
          errorText: "Please enter a valid title.",
          onInput: inputHandler,
        }}
      />
      <Input
        obj={{
          id: "description",
          label: "Description",
          element: "textarea",
          validators: [VALIDATOR_MINLENGTH(5)],
          errorText:
            "Please enter a valid description (at least 5 characters).",
          onInput: inputHandler,
        }}
      />

      <Input
        obj={{
          id: "adress",
          type: "text",
          label: "Address",
          element: "input",
          validators: [VALIDATOR_REQUIRE()],
          errorText: "Please enter a valid address.",
          onInput: inputHandler,
        }}
      />

      <Button
        obj={{
          type: "submit",
          disabled: !isValid,
        }}
      >
        {" "}
        ADD PLACE{" "}
      </Button>
    </form>
  );
};

export default NewPlace;
