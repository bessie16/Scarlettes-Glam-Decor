import './Stars.css';
import { FaStar } from "react-icons/fa";


export default function Stars() {
    return (
        <div className='starsDiv'>
            <FaStar className='starIcon' />
            <FaStar className='starIcon' />
            <FaStar className='starIcon' />
            <FaStar className='starIcon' />
            <FaStar className='starIcon' />
        </div>
    );
}