import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bigbg from './components/Bigbackground/Bigbg';
import Packages from './components/Packages/Packages';
import Feedback from './components/Feedback/Feedback';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsappPopUp from './components/WhatsappPopUp/whatsapp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Bigbg />
      <Packages />
      <Feedback />
      <Contact />
      <Footer />
      <WhatsappPopUp />
    </div>
  );
}

export default App;


// npm run deploy