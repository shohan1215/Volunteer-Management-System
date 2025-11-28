import React from "react";
import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error Page/Error";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteerNeedPost from "../Pages/Add Volunteer Need Post/AddVolunteerNeedPost";
import AllVolunteerNeedPost from "../Pages/All Volunteer Need Post/AllVolunteerNeedPost";
import NeedPostDeails from "../Pages/Volunteer Need Post Details Page/NeedPostDeails";
import VolunteerRequest from "../Pages/Volunteer Request/VolunteerRequest";
import ManageMyPost from "../Pages/Manage My Post/ManageMyPost";
import UpdatePost from "../Pages/Update Post/UpdatePost";
import Contact from "../Pages/Contact/Contact";
import TermsCondition from "../Pages/TermsConditon/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms-condition",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-volunteer-need-post",
        element: <AllVolunteerNeedPost></AllVolunteerNeedPost>,
      },
      {
        path: "/volunteer-post/:id",
        element: <NeedPostDeails></NeedPostDeails>,
      },
      {
        path: "/volunteer-request/:id",
        element: (
          <PrivateRoute>
            <VolunteerRequest></VolunteerRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-volunteer-need-post",
        element: (
          <PrivateRoute>
            <AddVolunteerNeedPost></AddVolunteerNeedPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
