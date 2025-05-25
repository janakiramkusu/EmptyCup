import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import DesignerCard from './components/DesignerCard';
import './App.css';

function App() {
  const [designers, setDesigners] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [isShortlistedFilter, setIsShortlistedFilter] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
  const fetchDesigners = async () => {
    try {
      const res = await fetch(`${URL}/api/designers`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Expected JSON, got something else");
      }
      const data = await res.json();
      setDesigners(data);
      const initiallyShortlisted = data
        .filter((d) => d.shortlisted)
        .map((d) => d._id);
      setShortlisted(initiallyShortlisted);

    } catch (error) {
      console.error('Error fetching designers:', error);
    }
  };
  fetchDesigners();
}, [URL]);


  const toggleShortlist = async (id) => {
  const currentlyShortlisted = shortlisted.includes(id);

  setShortlisted((prev) =>
    currentlyShortlisted ? prev.filter((x) => x !== id) : [...prev, id]
  );

  try {
    const res = await fetch(`${URL}/api/designers`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, shortlisted: !currentlyShortlisted }),
    });

    if (!res.ok) {
      throw new Error(`Failed to update shortlist, status: ${res.status}`);
    }

    const data = await res.json();
    if (!data.success) {
      throw new Error('Backend update unsuccessful');
    }

  } catch (error) {
    setShortlisted((prev) =>
      !currentlyShortlisted ? prev.filter((x) => x !== id) : [...prev, id]
    );

    console.error('Error updating shortlist:', error);
    alert('Failed to update shortlist. Please try again.');
  }
};

  const toggleShortlistedFilter = () => {
    setIsShortlistedFilter((prev) => !prev);
  };

  const filteredDesigners = isShortlistedFilter
    ? designers.filter((d) => shortlisted.includes(d._id))
    : designers;

  return (
    <>
      <Header />
      <Navbar
        isShortlistedFilter={isShortlistedFilter}
        toggleShortlistedFilter={toggleShortlistedFilter}
      />
      <div className="DesignerList">
        {filteredDesigners.map((designer) => (
          <DesignerCard
            key={designer._id}
            designer={designer}
            isShortlisted={shortlisted.includes(designer._id)}
            toggleShortlist={toggleShortlist}
          />
        ))}
      </div>
    </>
  );
}

export default App;
