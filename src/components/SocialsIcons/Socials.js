import './Socials.css';
import { FaFacebookSquare, FaTiktok, FaInstagramSquare } from "react-icons/fa";


export default function Socials() {
    return (
        <div className='mediaIconsDiv'>
            <a href='https://www.facebook.com/profile.php?id=100068952905326&mibextid=2JQ9oc' target='blank'>
                <FaFacebookSquare className='iconMedia fbIcon' />
            </a>
            <a href='https://www.tiktok.com/@scarlettesglamdecor?_t=8jkS6FDi7ef&_r=1' target='blank'>
                <FaTiktok className='iconMedia tiktokIcon' />
            </a>
            <a href='https://instagram.com/scarlettesglam?igshid=NTA5ZTk1NTc=' target='blank'>
                <FaInstagramSquare className='iconMedia instagramIcon' />
            </a>
        </div>
    );
}