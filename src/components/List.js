import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./List.css";

const List = ({ userData, appStatus }) => {
  const { isFirst, isLoading, isError } = appStatus;
  return (
    <div className="row">
      {isFirst ? (
        <h1>Enter the Name to Search</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1 style={{ color: "red" }}>{isError}</h1>
      ) : (
        userData.map((user) => {
          const { avatar_url, html_url, id, login } = user;

          return (
            <div className="card" key={id}>
              <a href={html_url} target="_blank" rel="noreferrer">
                <img
                  src={avatar_url}
                  style={{ width: "100px" }}
                  alt="userPicture"
                />
              </a>
              <p className="card-text">{login}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default List;
