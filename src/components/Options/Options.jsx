import css from "./Options.module.css";
import clsx from "clsx";

export default function Options({ onUpdate, feedbacksPresent }) {

    return (
        <div className={css.wrapper}>
            <button 
                className={clsx(css.btn, css.goodBtn)}
                onClick={() => {onUpdate("good")}}>
                    Good
            </button>
            <button 
                className={clsx(css.btn, css.neutralBtn)} 
                onClick={() => onUpdate("neutral")}>
                    Neutral
            </button>
            <button 
                className={clsx(css.btn, css.badBtn)} 
                onClick={() => onUpdate("bad")}>
                    Bad
            </button>
            {feedbacksPresent > 0 && <button 
                className={clsx(css.btn, css.resetBtn)} 
                onClick={onUpdate}>
                    Reset
            </button>}
        </div>
    )
}