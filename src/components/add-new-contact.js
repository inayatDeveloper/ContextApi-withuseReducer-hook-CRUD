import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import dateTime from "../utils";
import { contactStateContext } from "../context/contactListContext"
import {
  AddContact
} from "../constant";

const AddNewContact = (props) => {

  const { state, dispatch } = useContext(contactStateContext),
    [name, setName] = useState(""),
    [email, setEmail] = useState("");

  const saveContact = () => {
   
    dispatch({
      data: {
        id: state.Contacts.length + 1,
        Name: name,
        Email: email,
        CreatedDate: dateTime(),
        ModifiedDate: dateTime(),
      }, type: AddContact
    })
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h5 className="card-title">Add new Contact</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <button className="btn btn-primary" onClick={() => saveContact()}>
                save
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(
  AddNewContact
);
