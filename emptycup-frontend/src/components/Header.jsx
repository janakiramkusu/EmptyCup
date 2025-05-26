import './Header.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import logoImg from '../assets/logo-small 1.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logoImg} alt="Logo" className="logo" />
      <h1 className="title">EmptyCup</h1>
      <BsThreeDotsVertical className="menu-icon" />
    </header>
  );
};

export default Header;
