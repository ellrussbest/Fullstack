import { useReducer } from "react";
import "./Input.css";

// reducer function
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val, isValid: true };
    default:
      return state;
  }
};

const Input = ({ obj }) => {
  let { element, id, type, placeholder, rows, label, validators, errorText } =
    obj;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = inputState;

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
    });
  };

  element =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={value}
      />
    );

  return (
    <div className={`form-control ${!isValid && "form-control--invalid"}`}>
      <label htmlFor={id}>{label}</label>
      {element}
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;

/**
 * There are third party library that you can get form functionalities for free e.g.
 * FORMIK
 *
 * often when you have kind of two connected states, for example a state that validates an input value
 * this means that the validity depends on the input value
 * It is better to use useReducer instead of multiple useStates
 *
 * useReducer is great when we have a more COMPLEX state, or when we have INTERCONNECTED states
 *
 * useReducer(reducer, initial_state)
 * reducer is just a function which receives an action which we can dispatch; the function also receives the current state
 * after receiving the current state it updates the current state based on the action it received then use reducer will
 * return the updated state the re-render the component
 *
 */
