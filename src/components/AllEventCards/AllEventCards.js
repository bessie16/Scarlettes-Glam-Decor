import './AllEventCards.css';
import ReusableEventCard from '../ReusableEventCard/EventCard';
import { GiBabyFace, GiEngagementRing, GiOppositeHearts } from "react-icons/gi";
import { FaGraduationCap, FaChampagneGlasses } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaGifts } from "react-icons/fa";
// import { PiForkKnifeFill } from "react-icons/pi";
import { GiFlowerTwirl } from "react-icons/gi";
// importing event background images
import wedBg from './../../images/weddings/wedding5.jpg';
import picnBg from './../../images/picnics/picnic3.jpg';
import gradBg from './../../images/graduations/graduation2.jpg';
import annivBg from './../../images/anniversaries/anniversary3.jpg';
import birthdBg from './../../images/birthdays/birthday5.jpg';
import babyShBg from './../../images/baby showers/babyShower12.jpg';
import proposBg from './../../images/proposals/proposal1.jpg';
import corpoBg from './../../images/corporates/corporates4.jpg';
import bridalBg from './../../images/bridal showers/bridalShowers7.jpg';
import tableSetBg from './../../images/table setups/tableSetup9.jpg';

// import small blur loading pics
import smallWedBg from './../../images/small-pics/wedding5-small.jpg';
import smallPicnBg from './../../images/small-pics/picnic33-small.jpg';
import smallGradBg from './../../images/small-pics/graduation2-small.jpg';
import smallAnnivBg from './../../images/small-pics/anniversary3-small.jpg';
import smallBirthdBg from './../../images/small-pics/birthday5-small.jpg';
import smallBabyShBg from './../../images/small-pics/babyShower12-small.jpg';
import smallProposBg from './../../images/small-pics/proposal1-small.jpg';
import smallCorpoBg from './../../images/small-pics/corporates4-small.jpg';
import smallBridalBg from './../../images/small-pics/bridalShowers7-small.jpg';
import smallTableSetBg from './../../images/small-pics/tableSetup9-small.jpg';


export default function AllEventCards() {
    return (
        <div className='allEventCards'>
            <ReusableEventCard
                smallPic={smallWedBg}
                eventBgImage={wedBg}
                eventIcon={<GiOppositeHearts className='cardIcon' />}
                eventName={'Weddings'}
            />
            <ReusableEventCard
                smallPic={smallPicnBg}
                eventBgImage={picnBg}
                eventIcon={<FaChampagneGlasses className='cardIcon' />}
                eventName={'Picnics'}
            />
            <ReusableEventCard
                smallPic={smallGradBg}
                eventBgImage={gradBg}
                eventIcon={<FaGraduationCap className='cardIcon' />}
                eventName={'Graduations'}
            />
            <ReusableEventCard
                smallPic={smallAnnivBg}
                eventBgImage={annivBg}
                eventIcon={<BsCalendarDateFill className='cardIcon' />}
                eventName={'Anniversaries'}
            />
            <ReusableEventCard
                smallPic={smallBirthdBg}
                eventBgImage={birthdBg}
                eventIcon={<LiaBirthdayCakeSolid className='cardIcon' />}
                eventName={'Birthdays'}
            />
            <ReusableEventCard
                smallPic={smallBabyShBg}
                eventBgImage={babyShBg}
                eventIcon={<GiBabyFace className='cardIcon' />}
                eventName={'Baby Showers'}
            />
            <ReusableEventCard
                smallPic={smallProposBg}
                eventBgImage={proposBg}
                eventIcon={<GiEngagementRing className='cardIcon' />}
                eventName={'Proposals'}
            />
            <ReusableEventCard
                smallPic={smallCorpoBg}
                eventBgImage={corpoBg}
                eventIcon={<MdOutlineCorporateFare className='cardIcon' />}
                eventName={'Corporates'}
            />
            <ReusableEventCard
                smallPic={smallBridalBg}
                eventBgImage={bridalBg}
                eventIcon={<FaGifts className='cardIcon' />}
                eventName={'Bridal Showers'}
            />
            <ReusableEventCard
                smallPic={smallTableSetBg}
                eventBgImage={tableSetBg}
                eventIcon={<GiFlowerTwirl className='cardIcon' />}
                eventName={'Table Setups'}
            />
        </div>
    );
}