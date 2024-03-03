import './EventCard.css';
import { picturesData } from '../../eventPicturesData';
import GallerySlider from '../GallerySlider/GallerySlider';
import { useState } from 'react';


export default function ReusableEventCard({ smallPic, eventBgImage, eventIcon, eventName }) {
    const [showGallery, setShowGAllery] = useState(false);
    const [loadImg, setLoadImg] = useState(false);

    let clickedEventPics;

    function handleActivateGallery() {
        setShowGAllery(true);
    }

    function handleDeactivateGallery() {
        setShowGAllery(false);
    }

    function getClickedEventPics(nameOfEvent) {
        for (const eachEventData of picturesData) {
            if (nameOfEvent.toLowerCase() === eachEventData.name) {
                clickedEventPics = eachEventData.data;
            }
            // else add a component to pop up saying no pictures for the requested event
        }
        return clickedEventPics;
    }

    return (
        <div className='reusableEventCard'>
            <div
                className='blurredImgDiv'
                style={{ backgroundImage: `url(${smallPic})`, borderRadius: 'inherit', height: 'inherit' }}
                id={loadImg && 'packageLoadedImg'}
            >
                <img
                    src={eventBgImage}
                    alt={eventName}
                    loading='lazy'
                    onLoad={() => setLoadImg(true)}
                />
            </div>
            <button className='eventNameAndIcon' onClick={handleActivateGallery}>
                {eventIcon}
                <h3>{eventName}</h3>
            </button>
            {showGallery && <GallerySlider
                picsData={getClickedEventPics(eventName)}
                handleDeactivateGallery={handleDeactivateGallery}
                nameOfEvent={eventName}
            />}
        </div>
    );
}