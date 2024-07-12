import React from "react";

import MessageContainer from "../messageContainer/MessageContainer";
import AddAuthor from "../addAuthor/AddAuthor";

import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuthor />
    </div>
  );
};

export default MainContainer;
