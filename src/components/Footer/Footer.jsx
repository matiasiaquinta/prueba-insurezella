import './Footer.css';
import logo from '../../assets/logo.png';
import {
  FaFacebook,
  FaIdCard,
  FaInstagram,
  FaLinkedinIn,
  FaNotesMedical,
  FaTwitter,
  FaUserShield,
} from 'react-icons/fa';
import { PiUmbrella } from 'react-icons/pi';
import { IoIosPaper, IoMdMail, IoMdTime } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidUserRectangle } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          {/* Primera columna */}
          <div className="footer-column">
            <img src={logo} alt="Logo" />
            <p>
              "Discover the Peace of Mind You Deserve with Insurezella "Your
              Reliable Insurance Umbrella"
            </p>
            <div className="social-media">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Segunda columna */}
          <div className="footer-column">
            <h1>Services</h1>
            <ul>
              <li>
                <PiUmbrella /> <span>Health Insurance</span>
              </li>
              <li>
                <IoIosPaper /> <span>Life Insurance</span>
              </li>
              <li>
                <FaNotesMedical /> <span>Medicare Supplement</span>
              </li>
              <li>
                <FaIdCard /> <span>Medicare Advantage</span>
              </li>
              <li>
                <FaUserShield /> <span>(ACA)Obamacare</span>
              </li>
            </ul>
          </div>

          {/* Tercera columna */}
          <div className="footer-column">
            <h1>Company</h1>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Industry news</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Cuarta columna */}
          <div className="footer-column">
            <h1>Get In Touch</h1>
            <ul className="ul-getintouch">
              <li>
                <IoMdMail /> <span>Email: support@insurezella.com</span>
              </li>
              <li>
                <BsFillTelephoneFill /> <span>Tel: +18772270774</span>
              </li>
              <li>
                <IoMdTime /> <span>Hours: Mon-Fri 9:00AM - 5:00PM</span>
              </li>
              <li>
                <BiSolidUserRectangle />
                <span>300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="blue-bar"></div>
    </>
  );
};

export default Footer;
