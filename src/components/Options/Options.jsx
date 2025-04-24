import css from "./Options.module.css";

export default function Options({ onUpdate, feedbacksPresent }) {

    return (
        <div>
            <button onClick={() =>
                {onUpdate("good")}
    }>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {feedbacksPresent > 0 && <button onClick={onUpdate}>Reset</button>}
        </div>
    )
}