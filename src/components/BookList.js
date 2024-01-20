import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const BookList = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBooks();
    // getBooksByCategory();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBook(response.data);
  };

  const getBooksByCategory = async (e) => {
    // e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/books", "1");
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 text-center text-lg">
      <div className="relative overflow-x-auto">
        {Cookies.get("token") && (
          <Link to={`/books/add`} className="button btn-success">
            Add
          </Link>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image URL
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>{book.image_url}</td>
                <td>{book.category_id}</td>
                <td>
                  <Link
                    to={`/books/${book.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
