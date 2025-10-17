import styles from './Pages.module.scss'
import {Routes, Route} from 'react-router-dom';

import Home from './home';
import Login from './login';

const Pages = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default Pages