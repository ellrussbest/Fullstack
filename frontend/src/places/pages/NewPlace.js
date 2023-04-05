import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  url,
} from "../../shared/util/validators";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useNavigate } from "react-router-dom";

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
  const { userId } = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { isValid, inputs } = formState;
  const navigate = useNavigate();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${url}/places`,
        "POST",
        JSON.stringify({
          title: inputs.title.value,
          description: inputs.description.value,
          address: inputs.address.value,
          creator: userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/");
      // Redirect the user to a different page
    } catch (error) {}
  };

  return (
    <>
      <ErrorModal
        obj={{
          error,
          onClear: clearError,
        }}
      />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner obj={{ asOverlay: true }} />}
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
            id: "address",
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
    </>
  );
};

export default NewPlace;
