import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ users }) => {
  return (
    <div className={css.div}>
      <ul className={css.list}>
        {users.map((user) => {
          return (
            <li className={css.listIt} key={user.id}>
              <Contact name={user.name} number={user.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
