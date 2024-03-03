import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <small>
                Built by <a href='https://github.com/2Kelvin' target='blank'>Rocketman</a>
            </small>
            <small>&copy; {new Date().getFullYear()}</small>
        </footer>
    );
}