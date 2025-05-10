import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => (
  <li className={styles.card}>
    <div>
      <p>👤 {contact.name}</p>
      <p>📞 {contact.number}</p>
    </div>
    <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default Contact;
