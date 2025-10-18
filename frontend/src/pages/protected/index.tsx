import styles from './Protected.module.scss';

const Protected = () => {
  return (
    <div className={styles.container}>
      <p>Only logged in users can access this route, congrats authentication is working!</p>
    </div>
  )
}

export default Protected