import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    image_url: "",
    release_year: "",
    price: "",
    total_page: 0,
    thickness: "",
    category_id: "",
  });
  const [categories, setCategories] = useState({
    name: "",
  });
  const [user, setUser] = useState({
    username: "",
    name: "",
    password: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "description") {
      setInput({ ...input, description: value });
    } else if (name === "image_url") {
      setInput({ ...input, image_url: value });
    } else if (name === "release_year") {
      setInput({ ...input, release_year: value });
    } else if (name === "price") {
      setInput({ ...input, price: value });
    } else if (name === "total_page") {
      setInput({ ...input, total_page: value });
    } else if (name === "thickness") {
      setInput({ ...input, thickness: value });
    } else if (name === "category_id") {
      setInput({ ...input, category_id: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { title } = input;
    let { description } = input;
    let { image_url } = input;
    let { release_year } = input;
    let { price } = input;
    let { total_page } = input;
    let { thickness } = input;
    let { category_id } = input;

    // if (currentId === -1) {
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
        setFetchStatus(true);
        navigate("/books");
      })
      .catch((err) => {
        console.log(err);
      });

    // } else {
    //   axios
    //     .put(`http://localhost:5000/books/${currentId}`, {
    //       title,
    //       description,
    //       image_url,
    //       release_year,
    //       price,
    //       total_page,
    //       thickness,
    //       category_id,
    //     })
    //     .then((res) => {
    //       setFetchStatus(true);
    //       navigate("/books");
    //     })
    //     .catch((err) => {});
    // }

    setInput({
      title: "",
      description: "",
      image_url: "",
      release_year: "",
      price: "",
      total_page: 0,
      thickness: "",
      category_id: "",
    });
    setCurrentId(-1);
  };

  const handleEdit = (id) => {
    setCurrentId(id);
    navigate(`/books/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    navigate("/login");
    Cookies.remove("token");
    Cookies.remove("user");
    setFetchStatus(true);
  };

  const handleRupiah = (angka) => {
    let number_string = angka.toString();
    let split = number_string.split(",");
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return `Rp.${rupiah}`;
  };

  const handleText = (text) => {
    if (text) {
      if (text.length > 200) {
        return text.substring(0, 150) + "...";
      }
    }

    return text;
  };

  let fetchData = () => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFetchStatus(false);
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    user,
    setUser,
  };

  let handleFunction = {
    handleDelete,
    handleEdit,
    handleSubmit,
    handleChange,
    fetchData,
    handleRupiah,
    handleLogout,
    handleText,
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
