import { useRef, useState } from 'react';


export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ email: email, feedback: feedback }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then(res => res.json())
      .then(data => setFeedbackItems(data.feedback));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackRef} />
        </div>
        <button type='submit'>Send Feedback</button>
      </form>
      <button onClick={loadFeedbackHandler}>Load Feedbacks</button>
      <ul>
        {feedbackItems.map(item => <li key={item.id}>{item.feedback}</li>)}
      </ul>
    </div>
  );
}
