import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  let { id } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputBook, setInputBook, data, setData } = state;
  const { handleSubmitBook, handleChangeBook } = handleFunction;

  const getCategories = async () => {
    const response = await axios.get("http://localhost:5000/categories");
    setData(response.data);
  };

  useEffect(() => {
    getCategories();

    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        let result = res.data;
        setInputBook({
          title: result.title,
          description: result.description,
          image_url: result.image_url,
          release_year: result.release_year,
          price: result.price,
          total_page: result.total_page,
          thickness: result.thickness,
          category_id: result.category_id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center px-6 py-8 mx-autolg:py-0 -top-4">
      <div className=" bg-slate-50 rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0 dark:bg-slate-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Update Book
          </h1>
          <form onSubmit={handleSubmitBook}>
            <div className="mb-4">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.title}
                  onChange={handleChangeBook}
                  name="title"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.description}
                  onChange={handleChangeBook}
                  placeholder="Description"
                  name="description"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.image_url}
                  onChange={handleChangeBook}
                  placeholder="Image URL"
                  name="image_url"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Release Year
              </label>
              <div className="control">
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.release_year}
                  onChange={handleChangeBook}
                  min="1980"
                  max="2021"
                  name="release_year"
                  placeholder="Release Year"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.price}
                  onChange={handleChangeBook}
                  placeholder="Price"
                  name="price"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Total Page
              </label>
              <div className="control">
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.total_page}
                  onChange={handleChangeBook}
                  placeholder="Total Page"
                  name="total_page"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Thickness
              </label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={inputBook.thickness}
                  onChange={handleChangeBook}
                  placeholder="Thickness"
                  name="thickness"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={inputBook.category_id || ""}
                    onChange={handleChangeBook}
                    name="category_id"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {data &&
                      data.map((category, index) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
