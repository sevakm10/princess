import { useState, useEffect } from 'react';
import styles from "./ButtonMenu.module.css"

export default function ButtonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [st, setSt] = useState("none");
  const [z, setZ] = useState("0");

  useEffect(() => {
    // Этот эффект будет выполняться при каждом изменении isOpen
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const menuOverlay = document.querySelector(`.${styles.menuOverlay}`);

    if (isOpen) {
      hamburger.classList.add(styles.open);
      menuOverlay.classList.add(styles.open);
      setSt("table-cell")
      setZ(1)
    } else {
      hamburger.classList.remove(styles.open);
      menuOverlay.classList.remove(styles.open);
      setSt("none")
      setZ(0)
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header} style={{zIndex:z}}>
      <div className={`${styles.hamburger1} ${styles.hamburger}`} onClick={handleClick}>
        <span className='s'/>
        <span />
        <span />
      </div>
      <div className={styles.menuOverlay} >
        <ul className={styles.nav} style={{display:`${st}`}}>
          <li>
            <a href="#Dress" onClick={handleClick}>Dress</a>
          </li>
          <li>
            <a href="#Show" onClick={handleClick}>Show</a>
          </li>
          <li>
            <a href="#Furshet" onClick={handleClick}>Furshet</a>
          </li>
          <li>
            <a href="#Gallery" onClick={handleClick}>Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
