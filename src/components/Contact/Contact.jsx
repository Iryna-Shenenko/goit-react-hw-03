import css from "./Contact.module.css";
const Contact = ({ name, number }) => {
  return (
    <div className={css.container}>
      <div className={css.div}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
};
export default Contact;
