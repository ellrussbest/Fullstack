import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/pages/Users";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useState } from "react";

const Nav = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Nav>
//         <Users />
//       </Nav>
//     ),
//     errorElement: (
//       <Nav>
//         <Users />
//       </Nav>
//     ),
//   },
//   {
//     path: ":userId/places",
//     element: (
//       <Nav>
//         <UserPlaces />
//       </Nav>
//     ),
//   },
//   {
//     path: "places/new",
//     element: (
//       <Nav>
//         <NewPlace />
//       </Nav>
//     ),
//   },
//   {
//     path: "places/:placeId",
//     element: (
//       <Nav>
//         <UpdatePlace />
//       </Nav>
//     ),
//   },
//   {
//     path: "auth",
//     element: (
//       <Nav>
//         <Auth />
//       </Nav>
//     ),
//   },
// ]);

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");

  const login = useCallback((userId, token) => {
    setToken(token);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let router;

  if (token) {
    router = createBrowserRouter([
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
  } else {
    router = createBrowserRouter([
      {
        path: "/",
        element: (
          <Nav>
            <Users />
          </Nav>
        ),
        errorElement: (
          <Nav>
            <Auth />
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
        path: "auth",
        element: (
          <Nav>
            <Auth />
          </Nav>
        ),
      },
    ]);
  }
  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        token: token,
        isLoggedIn: !!token,
        login: login,
        logout: logout,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
