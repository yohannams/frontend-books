import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import UpdateBook from "../components/UpdateBook";
import CategoryList from "../components/CategoryList";
import AddCategory from "../components/AddCategory";
import UpdateCategory from "../components/UpdateCategory";
import LayoutLanding from "../widgets/LayoutLanding";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cookies from "js-cookie";
import Home from "../pages/Home";

const RouteComponent = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutLanding>
                <Home />
              </LayoutLanding>
            }
          />
          <Route
            path="/books"
            element={
              <LayoutLanding>
                <BookList />
              </LayoutLanding>
            }
          />
          <Route
            path="/books/add"
            element={
              <LayoutLanding>
                <AddBook />
              </LayoutLanding>
            }
          />
          <Route
            path="/books/:id"
            element={
              <LayoutLanding>
                <UpdateBook />
              </LayoutLanding>
            }
          />
          <Route
            path="/categories"
            element={
              <LayoutLanding>
                <CategoryList />
              </LayoutLanding>
            }
          />
          <Route
            path="/categories/add"
            element={
              <LayoutLanding>
                <AddCategory />
              </LayoutLanding>
            }
          />
          <Route
            path="/categories/:id"
            element={
              <LayoutLanding>
                <UpdateCategory />
              </LayoutLanding>
            }
          />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <LayoutLanding>
                  <Login />
                </LayoutLanding>
              </LoginRoute>
            }
          />
          <Route
            path="/register"
            element={
              <LayoutLanding>
                <Register />
              </LayoutLanding>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
