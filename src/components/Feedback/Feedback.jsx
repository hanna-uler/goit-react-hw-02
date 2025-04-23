import css from "./Feedback.module.css";

export default function Feedback({ feedbacks }) {
    return (
        <div>
                <p>Good: {feedbacks.good}</p>
                <p>Neutral: {feedbacks.neutral}</p>
                <p>Bad: {feedbacks.bad}</p>
            {/* <p>No feedback yet</p> */}
        </div>
    )
}