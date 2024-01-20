import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import CategoryList from "../components/CategoryList";
import AddCategory from "../components/AddCategory";
import EditCategory from "../components/EditCategory";
import LayoutLanding from "../widgets/LayoutLanding";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalProvider>
          <Routes>
            <Routes
              path="/"
              element={
                <LayoutLanding>
                  <Home />
                </LayoutLanding>
              }
            />
          </Routes>
        </GlobalProvider> */}
        <Routes>
          <Route path="/" element={<LayoutLanding />} />
          <Route
            path="/books"
            element={
              <LayoutLanding>
                <BookList />
              </LayoutLanding>
            }
          />
          <Route path="/books" element={<AddBook />} />
          <Route path="/books/:id" element={<EditBook />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories" element={<AddCategory />} />
          <Route path="/categories/:id" element={<EditCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
