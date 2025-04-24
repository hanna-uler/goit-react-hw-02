import css from "./App.module.css";
import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";


export default function App() {
    const [values, setValues] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })
 
    const updateFeedback = feedbackType => {
        if (feedbackType === "good") {
            setValues({...values, good: values.good + 1});
        } else if (feedbackType === "neutral") {
            setValues({...values, neutral: values.neutral + 1});
        } else if (feedbackType === "bad") {
            setValues({...values, bad: values.bad + 1});
        } else {
            setValues({
        good: 0,
        neutral: 0,
        bad: 0
    });
        }
    }

    const totalFeedback = values.good + values.neutral + values.bad;
    const positiveFeedbs = Math.round((values.good / totalFeedback) * 100);

    return (
        <div className={css.container}>
            <Description />
            <Options onUpdate={updateFeedback} feedbacksPresent={totalFeedback}/>
            {totalFeedback > 0 ? <Feedback feedbacks={values} total={totalFeedback} positive={positiveFeedbs}/> : <Notification/>}
        </div>
    )
    
}