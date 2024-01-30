import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  let { id } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handleSubmit, handleChange } = handleFunction;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories/${id}`)
      .then((res) => {
        let result = res.data;
        setInput({
          name: result.name,
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
            Update Category
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                />
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

export default UpdateCategory;
