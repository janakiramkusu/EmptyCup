import './Header.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <img src="src\assets\logo-small 1.png" alt="Logo" className="logo" />
      <h1 className="title">EmptyCup</h1>
      <BsThreeDotsVertical className="menu-icon" />
    </header>
  );
};

export default Header;
