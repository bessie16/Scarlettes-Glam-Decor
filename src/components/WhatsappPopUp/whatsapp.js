import './whatsapp.css';
import whatsapp from './../../images/icons/whatsappRound.png';
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';



export default function WhatsappPopUp() {
    const [cancelWhatsappPopUp, setCancelWhatsappPopUp] = useState(false);

    return (
        <div className={cancelWhatsappPopUp ? 'thePopUpContainer noShow' : 'thePopUpContainer'}>
            <div className='closePopUp'>
                <TfiClose
                    className='cancelPop'
                    onClick={() => setCancelWhatsappPopUp(true)}
                />
            </div>
            <div className='popUp'>
                <p className='chat'>Chat with us</p>
                <a href='https://wa.me/254706060096' target='blank'>
                    <img src={whatsapp} alt='Whatsapp' className='whatsapp' />
                </a>
            </div>
        </div>
    );
}