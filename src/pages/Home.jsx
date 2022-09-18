import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';
import serversImg from '../assets/images/servidoresvirtuales.jpg';
import { Button } from 'react-bootstrap';


export const Home = () => {
  const navigate = useNavigate();
  const {triangle, triangle1} = styles;

  return (
    <article className={styles.container_home_view}>
      <div className={styles["container__background-triangle"]}>
          <div className={`${triangle} ${triangle1}`}></div>
          <div className={`${styles.triangle} ${styles.triangle2}`}></div>
          <div className={`${styles.triangle} ${styles.triangle3}`}></div>
      </div>
      <div className={styles.container__cards}>
        <div className={styles.card}>
          <div className={styles.cover__card}>
            <img src={serversImg} alt="serversImg"/>
          </div>
          <h2>Find your server</h2>
          <p>Search for an IP, and find its location!</p>
          <hr/>
          <div className={`d-flex flex-row justify-content-center ${styles["wrap-btns"]}`}>
            <Button className={`${styles["btn"]}  ${styles["style1"]}`} onClick={() => navigate('/locatedevice')}>Locate Device</Button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover__card}>
            <img src={require('../assets/images/locationsimg.jpg')} alt="locatImg"/>
          </div>
          <h2>Map your own IP</h2>
          <p>Save your custom ips!</p>
          <hr/>
          <div className={`d-flex flex-row justify-content-center ${styles["wrap-btns"]}`}>
            <Button className={`${styles["btn"]}  ${styles["style1"]}`} onClick={() => navigate('/devices')}>Devices</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
