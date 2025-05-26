import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import './DesignerCard.css';

import arrowImg from '../assets/arrow.png';
import eyeslashImg from '../assets/eyeslash.png';
import shortlistedImg from '../assets/Shortlisted2.png';
import shortlistImg from '../assets/Shortlisted1.png';
import reportImg from '../assets/Report.png';

const DesignerCard = ({ designer, isShortlisted, toggleShortlist }) => {
  const id = designer._id;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="star-icon" />);

    return stars;
  };

  return (
    <div className={`designer-card ${isShortlisted ? 'shortlisted' : ''}`}>
      <div className="card-left">
        <h3>{designer.name}</h3>
        <div className="stars">{renderStars(designer.rating)}</div>
        <p className="description">{designer.description}</p>

        <div className="stats">
          <div className="stat-block"><strong>{designer.projects}</strong><span>Projects</span></div>
          <div className="stat-block"><strong>{designer.years}</strong><span>Years</span></div>
          <div className="stat-block"><strong>{designer.price}</strong><span>Price</span></div>
        </div>

        <div className="phone">
          <p>+91 - {designer.phone1}</p>
          <p>+91 - {designer.phone2}</p>
        </div>
      </div>

      <div className="card-right">
        <div className="action"><img src={arrowImg} alt="Details" /> <span>Details</span></div>
        <div className="action"><img src={eyeslashImg} alt="Hide" /> <span>Hide</span></div>
        <div className="action" onClick={() => toggleShortlist(id)}>
          <img src={isShortlisted ? shortlistedImg : shortlistImg} alt="Shortlist" />
          <span>Shortlist</span>
        </div>
        <div className="action"><img src={reportImg} alt="Report" /> <span>Report</span></div>
      </div>
    </div>
  );
};

export default DesignerCard;
