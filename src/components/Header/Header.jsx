import './Header.css';
import logo from '../../assets/logo.png';
import iconMail from '../../assets/icon-mail.png';
import iconTel from '../../assets/icon-phone.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="info-nav">
        <img src={logo} alt="" className="logo-responsive" />
        <FaBars className="hamburguer-responsive" />
        <span className="info-nav-title">Want to Connect with us?</span>
        <div className="social-nav">
          <div>
            <img src={iconMail} alt="Icon Mail" />
            <span>Mail us: support@insurezella.com</span>
          </div>
          <div>
            <img src={iconTel} alt="Icon Phone" />
            <span>Call us: (877) 227 0774</span>
          </div>
        </div>
      </div>

      <nav>
        <img src={logo} alt="" />

        <ul>
          <li className="selected">Home</li>
          <div className="vertical-bar"></div>
          <li>Find Insurance ▾</li>
          <div className="vertical-bar"></div>
          <li>Learn</li>
          <div className="vertical-bar"></div>
          <li>About</li>
        </ul>

        <button>Call Us Now ➡</button>
      </nav>
    </header>
  );
};

export default Header;
