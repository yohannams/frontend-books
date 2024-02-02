import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [books, setBooks] = useState(null);
  const [input, setInput] = useState({
    name: "",
  });
  const [inputBook, setInputBook] = useState({
    title: "",
    description: "",
    image_url: "",
    release_year: "",
    price: "",
    total_page: 0,
    thickness: "",
    category_id: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [fetchStatusBook, setFetchStatusBook] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [currentIdBook, setCurrentIdBook] = useState(-1);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    }
  };

  const handleChangeBook = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setInputBook({ ...inputBook, title: value });
    } else if (name === "description") {
      setInputBook({ ...inputBook, description: value });
    } else if (name === "image_url") {
      setInputBook({ ...inputBook, image_url: value });
    } else if (name === "release_year") {
      setInputBook({ ...inputBook, release_year: value });
    } else if (name === "price") {
      setInputBook({ ...inputBook, price: value });
    } else if (name === "total_page") {
      setInputBook({ ...inputBook, total_page: value });
    } else if (name === "thickness") {
      setInputBook({ ...inputBook, thickness: value });
      console.log(inputBook);
    } else if (name === "category_id") {
      setInputBook({ ...inputBook, category_id: value });
      console.log(inputBook);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name } = input;

    if (currentId === -1) {
      axios
        .post("http://localhost:5000/categories", {
          name,
        })
        .then((res) => {
          setFetchStatus(true);
          navigate("/categories");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch(`http://localhost:5000/categories/${currentId}`, {
          name,
        })
        .then((res) => {
          setFetchStatus(true);
          navigate("/categories");
        })
        .catch((err) => {});
    }

    setInput({
      name: "",
    });
    setCurrentId(-1);
  };

  const handleSubmitBook = (event) => {
    event.preventDefault();

    let { title } = inputBook;
    let { description } = inputBook;
    let { image_url } = inputBook;
    let { release_year } = inputBook;
    let { price } = inputBook;
    let { total_page } = inputBook;
    let { thickness } = inputBook;
    let { category_id } = inputBook;

    if (currentIdBook === -1) {
      axios
        .post("http://localhost:5000/books", {
          title,
          description,
          image_url,
          release_year,
          price,
          total_page,
          thickness,
          category_id,
        })
        .then((res) => {
          setFetchStatusBook(true);
          navigate("/books");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .patch(`http://localhost:5000/books/${currentIdBook}`, {
          title,
          description,
          image_url,
          release_year,
          price,
          total_page,
          thickness,
          category_id,
        })
        .then((res) => {
          setFetchStatusBook(true);
          navigate("/books");
        })
        .catch((err) => {});
    }

    setInputBook({
      title: "",
      description: "",
      image_url: "",
      release_year: "",
      price: "",
      total_page: 0,
      thickness: "",
      category_id: "",
    });
    setCurrentIdBook(-1);
  };

  const handleEdit = (id) => {
    setCurrentId(id);
    navigate(`/categories/${id}`);
  };

  const handleEditBook = (id) => {
    console.log(id);
    setCurrentIdBook(id);
    navigate(`/books/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/categories/${id}`)
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBook = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setFetchStatusBook(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let fetchData = () => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFetchStatus(false);
  };

  let fetchDataBook = () => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFetchStatusBook(false);
  };

  let state = {
    data,
    books,
    setData,
    setBooks,
    input,
    inputBook,
    setInput,
    setInputBook,
    fetchStatus,
    fetchStatusBook,
    setFetchStatus,
    setFetchStatusBook,
    currentId,
    currentIdBook,
    setCurrentId,
    setCurrentIdBook,
  };

  let handleFunction = {
    handleDelete,
    handleDeleteBook,
    handleEdit,
    handleEditBook,
    handleSubmit,
    handleSubmitBook,
    handleChange,
    handleChangeBook,
    fetchData,
    fetchDataBook,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
