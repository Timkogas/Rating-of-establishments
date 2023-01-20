import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../store/actions/usersActions';
import HasAccess from '../../../UI/HasAccess/HasAccess'

function UserMenu() {
  const { user } = useSelector(state => state.users);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <HasAccess allowed>
      <nav className='header_nav_menu'>
        <NavLink to='/posts' className='header_link'>Посты</NavLink>
        <p className='header_link header_text'> Привет, <span> </span>
          {user.username}!
        </p>
        <span className='header_link header_text'>|</span>
        <p className='header_link' onClick={logout}>Выйти</p>
      </nav>
    </HasAccess>
  );
}

export default UserMenu;