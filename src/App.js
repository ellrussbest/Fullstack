import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/pages/Users";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Nav = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Nav>
        <Users />
      </Nav>
    ),
    errorElement: (
      <Nav>
        <Users />
      </Nav>
    ),
  },
  {
    path: ":userId/places",
    element: (
      <Nav>
        <UserPlaces />
      </Nav>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
