import { useContext, useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./Auth.css";

const Auth = () => {
  const { login, logout } = useContext(AuthContext);
  const [formState, inputHandler, setFormData] = useForm({
    initialInputs: {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    initialFormValidity: false,
  });
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    login()
  };
  return (
    <Card
      obj={{
        className: "authentication",
      }}
    >
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            obj={{
              element: "input",
              id: "name",
              type: "text",
              label: "Your Name",
              validators: [VALIDATOR_REQUIRE()],
              errorText: "Please enter a name",
              onInput: inputHandler,
            }}
          />
        )}
        <Input
          obj={{
            id: "email",
            element: "input",
            type: "email",
            label: "E-Mail",
            validators: [VALIDATOR_EMAIL()],
            errorText: "Please enter a valid Email",
            onInput: inputHandler,
          }}
        />
        <Input
          obj={{
            id: "password",
            element: "input",
            type: "password",
            label: "Password",
            validators: [VALIDATOR_MINLENGTH(5)],
            errorText: "Please enter a valid password, at least 5 characters.",
            onInput: inputHandler,
          }}
        />
        <Button
          obj={{
            type: "submit",
            disabled: !formState.isValid,
          }}
        >
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button obj={{ inverse: true, onClick: switchModeHandler }}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
