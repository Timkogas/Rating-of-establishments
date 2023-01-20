import './Navigation.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import UserMenu from './Menus/UserMenu/UserMenu';
import AnonymousMenu from './Menus/AnonymousMenu/AnonymousMenu';

function Navigation() {
  const { user } = useSelector(state => state.users);
  return (
    <header className='header'>
      <div className='header_logo'>
        <Link to='/posts' className='header_logo_link'>Exam13</Link>
      </div>
      {!user ?
        <AnonymousMenu />
        :
        <UserMenu />
      }
    </header>
  );
}

export default Navigation;
