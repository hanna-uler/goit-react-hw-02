import css from "./App.module.css";
import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";


export default function App() {
    const [values, setValues] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })
        const updateFeedbackGood = () => {
        setValues(...values, values.good + 1);
        }
        const updateFeedbackNeutral = () => {
        setValues(...values, values.neutral + 1);
        }
        const updateFeedbackBad = () => {
        setValues(...values, values.bad + 1);
    }
    // const updateFeedback = feedbackType => {
    //     setValues(...values, values.feedbackType + 1);
    // }
    return (
        <div className={css.container}>
            <Description />
            <Options />
            <Feedback feedbacks={values}/>
        </div>
    )
    
}