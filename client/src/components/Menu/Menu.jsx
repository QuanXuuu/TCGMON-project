import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import MenuHeader from '../MenuHeader/MenuHeader';
import './Menu.scss';

const Menu = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="Menu">
      <div className="MenuContent">
        <MenuHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="MenuOptions">
          <button onClick={() => navigate('/collections')}> Collections</button>
          <button onClick={() => navigate('/search')}>Search</button>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <footer>
          {/* <button onClick={() => navigate('/')}>Impressum</button>
          <button onClick={() => navigate('/')}>Datenschutzerklärung</button> */}
          <p>&#169; 2023 TCGMON</p>
          <p className="disclaimer">
            Pokémon and the Pokémon logo are registered trademarks of The
            Pokémon Company International, Inc. The rights to all
            Pokémon-related, third-party media displayed on this website belong
            to The Pokémon Company International, Inc. TCGMON is not associated
            with The Pokémon Company International, Inc. and this website is not
            produced by, endorsed by, supported by, or affiliated with The
            Pokémon Company, Inc.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
