import "./Navbar.css";

const Navbar = ({ isShortlistedFilter, toggleShortlistedFilter }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-item active">
          <img src="src/assets/contact.png" alt="Contacts" />
        </div>
        <div className="nav-item">
          <img src="emptycup-frontend/src/assets/Gallery.png" alt="Gallery" />
        </div>
        <div className="nav-item disabled">
          <img src="src/assets/Maps.png" alt="Map" />
        </div>
      </div>

      <div className="nav-right">
        <div
          className={`nav-item ${isShortlistedFilter ? 'active' : ''}`}
          onClick={toggleShortlistedFilter}
        >
          <img src="src/assets/Shortlisted.png" alt="Shortlisted" />
        </div>
        <div className="nav-item">
          <img src="src/assets/sort.png" alt="Sort" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
