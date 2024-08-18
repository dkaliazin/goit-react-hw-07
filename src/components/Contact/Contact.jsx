import css from "./Contact.module.css";
const Contact = ({ data, onDelete }) => {
    return (
        <div className={css.container}>
        <div className={css.containertext}>
            <p className={css.text}>
                {data.name}
            </p>
            <p className={css.text}>
                {data.number}
            </p>
        </div>
            <button className={css.btn} onClick={() => onDelete(data.id)}>
                Delete
            </button>
        </div>
    )
}
export default Contact;