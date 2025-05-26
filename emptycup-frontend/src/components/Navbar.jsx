import "./Navbar.css"; 
import contactImg from "../assets/contact.png";
import galleryImg from "../assets/Gallery.png";
import mapsImg from "../assets/Maps.png";
import shortlistedImg from "../assets/Shortlisted.png";
import sortImg from "../assets/sort.png";

const Navbar = ({ isShortlistedFilter, toggleShortlistedFilter }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-item active">
          <img src={contactImg} alt="Contacts" />
        </div>
        <div className="nav-item">
          <img src={galleryImg} alt="Gallery" />
        </div>
        <div className="nav-item disabled">
          <img src={mapsImg} alt="Map" />
        </div>
      </div>

      <div className="nav-right">
        <div
          className={`nav-item ${isShortlistedFilter ? "active" : ""}`}
          onClick={toggleShortlistedFilter}
        >
          <img src={shortlistedImg} alt="Shortlisted" />
        </div>
        <div className="nav-item">
          <img src={sortImg} alt="Sort" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
