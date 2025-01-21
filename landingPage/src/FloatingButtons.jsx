import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './FloatingIcons.css'; // Assurez-vous que ce fichier CSS existe

const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Bouton WhatsApp */}
      <div className="circle whatsapp">
        <a
          href="https://wa.me/212600000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
      </div>

      {/* Bouton Scroll-Up */}
      <div className="circle scroll-up" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </div>
    </div>
  );
};

export default FloatingIcons;
