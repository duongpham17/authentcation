import style from './Protected.module.scss';
import { Link } from 'react-router-dom';
import { user_authentication } from '@localstorage';

const Protected = () => {

  const logout = () => {
    window.location.reload();
    user_authentication.remove();
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <Link to="/">VAT</Link>
        <Link to="/dashboard"> | Dashboard</Link>
      </div>

      <div className={style.right}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Protected