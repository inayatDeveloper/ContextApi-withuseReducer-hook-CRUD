import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { contactStateContext } from "../context/contactListContext"
import {
  DeleteContact
} from "../constant";

const ContactList = (props) => {
  const { state, dispatch } = useContext(contactStateContext);

  useEffect(() => {

  }, []);

  const deleteContact = (e, id) => {
    if (window.confirm("Are you want to delete contact ?")) {
      dispatch({ type: DeleteContact, id })
    }
  };

  return (
    <div className="container">
      <button
        style={{ margin: "20px 0px" }}
        className="btn btn-primary"
        onClick={() => props.history.push("/add")}
      >
        AddNew
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date Created</th>
            <th scope="col">Date Modified</th>
            <th scope="col">Show Details</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.Contacts.map((info, index) => (
            <tr key={index}>
              <td>{info.Name}</td>
              <td>{info.Email}</td>
              <td>{info.CreatedDate}</td>
              <td>{info.ModifiedDate}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={(e) => props.history.push("/details/" + info.id)}
                >
                  Show
                </button>
              </td>

              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => props.history.push("/edit/" + info.id)}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteContact(e, info.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(
  ContactList
);
