import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/books/${id}`, {
        title,
        description,
        imageUrl,
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
    setImageUrl(response.data.imageUrl);
    setCategoryId(response.data.categoryId);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBook}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {/* <option value="Male">Male</option>
                  <option value="Female">Female</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
