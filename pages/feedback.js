import { Fragment, useState } from 'react';
import { buildFeedbackPath, extractFeedback } from './api/feedback';

export default function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState();

    function loadFeedbackHandler(id) {
        fetch(`/api/feedback/${id}`)
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data.feedback);
            });
    }

    return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map(item => <li key={item.id}>{item.feedback}<button onClick={loadFeedbackHandler.bind(null, item.id)}>Show</button></li>)}
            </ul>
        </Fragment>
    );
}

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return {
        props: {
            feedbackItems: data
        }
    };
}