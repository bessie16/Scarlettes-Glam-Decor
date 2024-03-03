import './Bigbg.css';
import bgPicture from './../../images/picnics/picnic3.jpg';
import smallBlurBg from '../../images/small-pics/picnic3-small.jpg';
import { useState } from 'react';

export default function Bigbg() {
    const [imgLoaded, setImageLoaded] = useState(false);

    return (
        <section className="bigBg">
            <div
                className='blurredImgDiv'
                id={imgLoaded && 'loadedImg'}
                style={{ backgroundImage: `url(${smallBlurBg})` }}
            >
                <img
                    src={bgPicture}
                    alt='main background'
                    loading='lazy'
                    // if image is loaded add the id 'loadedImg' to its parent div
                    // which will make the image visible by updating opacity to 1
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <h2>Event Planning & Decoration Services</h2>
        </section>
    );
}