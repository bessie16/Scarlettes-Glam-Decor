import './Feedback.css';
import AllFeedback from '../AllFeedbackCards/AllFeedback';


export default function Feedback() {
    return (
        <section className='feedbackSection'>
            <h2 id='feedbackDecor'>Feedback</h2>
            <AllFeedback />
        </section>
    );
}