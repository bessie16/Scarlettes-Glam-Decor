import './GallerySlider.css';
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";


export default function GallerySlider({ handleDeactivateGallery, picsData, nameOfEvent }) {
    const [eachPicIndex, setEachPicIndex] = useState(0);
    let onePicture = picsData[eachPicIndex];

    const cantGoNext = eachPicIndex === picsData.length - 1;
    const cantGoPrev = eachPicIndex === 0;

    function handlePrevImage() {
        if (!cantGoPrev) {
            setEachPicIndex(eachPicIndex - 1);
        }
    }

    function handleNextImage() {
        if (!cantGoNext) {
            setEachPicIndex(eachPicIndex + 1);
        }
    }

    return (
        <div className='gallery'>

            <div className='closeGalleryDiv'>
                <TfiClose
                    className='iconClose'
                    onClick={handleDeactivateGallery}
                />
            </div>

            <div className='sliderButtons'>
                <button disabled={cantGoPrev}>
                    <MdOutlineNavigateBefore
                        className='iconSliders'
                        onClick={handlePrevImage}
                    />
                </button>
                <button disabled={cantGoNext}>
                    <MdOutlineNavigateNext
                        className='iconSliders'
                        onClick={handleNextImage}
                    />
                </button>
            </div>

            <div className='imageDiv'>
                <img src={onePicture.src} alt={onePicture.alt} loading='lazy' />
            </div>

            <p className='imgDetails'>
                {`${nameOfEvent}: ${eachPicIndex + 1}/${picsData.length}`}
            </p>
        </div>
    );
}