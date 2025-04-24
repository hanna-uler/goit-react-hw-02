import css from "./Notification.module.css"

export default function Notification() {
    return (
        <div>
            <p className={css.message}>There is no feedback yet.</p>
        </div>
    )
}