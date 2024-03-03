import './AllFeedback.css'
import { reviewData } from './../../reviewData';
import ReusableFeedbackCard from '../ReusableFeedbackCard/ReusableFeedbackCard';

export default function AllFeedback() {
    return (
        <div className='allFeedback'>
            {reviewData.map((eachReview) =>
                <ReusableFeedbackCard
                    key={eachReview.id}
                    customerName={eachReview.name}
                    year={eachReview.reviewYear}
                    customerColor={eachReview.color}
                    theReview={eachReview.message}
                />
            )}
        </div>
    );
}