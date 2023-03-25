import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/pages/Users";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";

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
  {
    path: "places/new",
    element: (
      <Nav>
        <NewPlace />
      </Nav>
    ),
  },
  {
    path: "places/:placeId",
    element: (
      <Nav>
        <UpdatePlace />
      </Nav>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
