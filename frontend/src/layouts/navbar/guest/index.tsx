import style from './Guest.module.scss';
import { Link } from 'react-router-dom';

const Guest = () => {

  return (
    <div className={style.container}>

      <div className={style.left}>
        <Link to="/">VAT</Link>
        <Link to="/protected"> | Protected Route</Link>
      </div>

      <div className={style.right}>
        <Link to="/login">Login</Link>
      </div>

    </div>
  )
}

export default Guest