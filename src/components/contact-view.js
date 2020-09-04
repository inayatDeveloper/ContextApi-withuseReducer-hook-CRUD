import React, { useState, useEffect,useContext } from "react";
import { withRouter } from "react-router-dom";
import { contactStateContext } from "../context/contactListContext"

const ViewContact = (props) => {
  const { state, dispatch } = useContext(contactStateContext);

  let [name, setName] = useState(""),
    [email, setEmail] = useState("");

  useEffect(() => {
    getContactInfo();
  }, []);

  const getContactInfo = () => {
    state.Contacts.filter((info) => {
      if (info.id == props.match.params.id) {
        setName(info.Name);
        setEmail(info.Email);
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h5 className="card-title">Contact Info.</h5>

              <h6>Name:{name}</h6>
              <h6>Email:{email}</h6>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  ViewContact
);
