import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map(c => (
      <Contact key={c.id} contact={c} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
