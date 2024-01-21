import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [price, setPrice] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [thickness, setThickness] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategory] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCategories();
    getBookById();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:5000/categories");
    setCategory(response.data);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/books/${id}`, {
        title,
        description,
        imageUrl,
        releaseYear,
        price,
        totalPage,
        thickness,
        categoryId,
      });
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/books/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setImageUrl(response.data.image_url);
    setReleaseYear(response.data.release_year);
    setPrice(response.data.price);
    setTotalPage(response.data.total_page);
    setThickness(response.data.thickness);
    setCategoryId(response.data.categoryId);
  };

  return (
    <div className="container flex flex-col items-center justify-center px-6 py-8 mx-autolg:py-0 -top-4">
      <div className=" bg-slate-50 rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0 dark:bg-slate-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Update Book
          </h1>
          <form onSubmit={updateBook}>
            <div className="mb-4">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
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
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image URL"
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
                  value={releaseYear}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  min="1980"
                  max="2021"
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
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
                  value={totalPage}
                  onChange={(e) => setTotalPage(e.target.value)}
                  placeholder="Total Page"
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
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  placeholder="Thickness"
                  readOnly
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
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {categories.map((category, index) => (
                      <option value={category.id}>{category.name}</option>
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
