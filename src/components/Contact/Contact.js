import Socials from '../SocialsIcons/Socials';
import './Contact.css';

export default function Contact() {
    return (
        <section className='contact'>
            <h2 id='contactDecor'>Contact Us</h2>
            <p>Contact us on our socials below or message us directly on Whatsapp.</p>
            <Socials />
        </section>
    );
}