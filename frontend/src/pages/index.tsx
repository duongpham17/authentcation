import styles from './Pages.module.scss'
import {Routes, Route} from 'react-router-dom';

import Private from './Private';
import Home from './home';
import Login from './login';
import Protected from './protected';

const Pages = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/protected" element={<Private component={Protected} roles={["admin","user"]}/> } />
      </Routes>
    </div>
  )
}

export default Pages