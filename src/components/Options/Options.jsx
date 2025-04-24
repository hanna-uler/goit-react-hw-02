import css from "./Options.module.css";

export default function Options({ onUpdate, feedbacksPresent }) {

    return (
        <div className={css.wrapper}>
            <button 
                className={css.btn}
                onClick={() => {onUpdate("good")}}>
                    Good
            </button>
            <button 
                className={css.btn} 
                onClick={() => onUpdate("neutral")}>
                    Neutral
            </button>
            <button 
                className={css.btn} 
                onClick={() => onUpdate("bad")}>
                    Bad
            </button>
            {feedbacksPresent > 0 && <button 
                className={css.btn} 
                onClick={onUpdate}>
                    Reset
            </button>}
        </div>
    )
}