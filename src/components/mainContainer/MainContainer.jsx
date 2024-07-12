import { useContext } from "react";

import MessageContainer from "../messageContainer/MessageContainer";
import AddAuthor from "../addAuthor/AddAuthor";

import "./MainContainer.css";
import AdminContainer from "../adminContainer/AdminContainer";

import { AdminContext } from "../../providers/adminProvider/AdminProvider";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuthor />
      <AdminContainer />
    </div>
  );
};

export default MainContainer;
