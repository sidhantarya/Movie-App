import React from "react";
import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";

function SearchForm({ searchTerm }) {
  return (
    <Form method="GET" className={`container ${styles.form}`}>
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={searchTerm}
        required
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchForm;

// by default form get method ko use kerta hain
// Jo name mai hum value pass keryege wahi naam se url mai pass hoga paramter jo hum input field mai likhyege
