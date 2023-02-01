import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const menuItems = [];
  return (
    <div className='topSpace'>
      <header>
        <div className='header'>
          <Link to='/' className='text-nowrap'>E-Kart Logo</Link>
          <nav className='w-75'>
            <ul className='menu'>
              {menuItems.map((item) => {
                return (
                  <li key={item}>
                    <Link to={item}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
