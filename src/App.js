import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";
import RouteComponent from "./router/RouteComponent";

function App() {
  return (
    <RouteComponent />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/books" element={<BookList />} />
    //     <Route path="/books" element={<AddBook />} />
    //     <Route path="/books/:id" element={<EditBook />} />
    //     <Route path="/categories" element={<CategoryList />} />
    //     <Route path="/categories" element={<AddCategory />} />
    //     <Route path="/categories/:id" element={<EditCategory />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
