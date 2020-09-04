import { combineReducers } from "redux";
import Contacts from "./contactListContext";
const allreducers = combineReducers({
  Contacts: Contacts,
});

export default allreducers;
