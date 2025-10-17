import styles from './Login.module.scss';
import { useState, useEffect } from 'react';

import Signin from './Signin';
import Signup from './Signup';
import { useAppSelector } from '@redux/hooks/useRedux';

const Login = () => {

  const [navbar, setNavbar] = useState("signin");

  const {user} = useAppSelector(state => state.authentications);

  useEffect(() => {
    if(user?._id) return window.location.replace("/");
  }, [user]);

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>VAT Due Diligence</h1>
        <p>Access your account to continue</p>
      </div>

      <div className={styles.box}>
        <div className={styles.header}>
          <h1>Authentication</h1>
          <p>Sign in to your existing account or create a new one</p>
        </div>

        <div className={styles.navbar}>
          <button onClick={() => setNavbar("signin")} className={navbar==="signin"?styles.selected:""}>Sign In</button>
          <button onClick={() => setNavbar("signup")} className={navbar==="signup"?styles.selected:""}>Sign Up</button>
        </div>

        {navbar === "signin" && <Signin />}
        {navbar === "signup" && <Signup />}
      </div>
    </div>
  )
}

export default Login