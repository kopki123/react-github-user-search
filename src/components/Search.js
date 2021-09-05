import React, { useRef } from "react";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ setUserData, setAppStatus }) => {
  const searchRef = useRef(null);

  const searchData = () => {
    if (searchRef.current.value) {
      setAppStatus({
        isFirst: false,
        isLoading: true,
        isError: false,
      });
      axios
        .get(`https://api.github.com/search/users?q=${searchRef.current.value}`)
        .then((response) => {
          setUserData(response.data.items);
          setAppStatus({
            isLoading: false,
            isError: false,
          });
        })
        .catch((error) => {
          setAppStatus({
            isLoading: false,
            isError: error.message,
          });
        });
    } else {
      window.alert("Please enter something to search");
    }
  };

  return (
    <section className="p-5 my-4 background-color rounded-3">
      <h3 className="py-3">Search Github Users</h3>
      <div>
        <input
          ref={searchRef}
          type="text"
          placeholder="enter the name you search"
        />
        &nbsp;
        <button className="btn btn-secondary mx-2" onClick={searchData}>
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
