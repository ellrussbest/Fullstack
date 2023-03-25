import { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    isValid: false,
  });

  const { isValid, inputs, description } = formState;
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value,
      inputId: id,
      isValid,
    });
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputs); // send thisto the backend
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
