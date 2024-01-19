import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
