import style from "./Header.module.css";
import imgTel from "../../assets/tel.svg";
import gsap from "gsap";

import { useEffect,useRef } from "react";

export default function Header() {
  const appRef = useRef(null)
  const appRef1 = useRef(null)
  const appRef2 = useRef(null)

  useEffect(()=>{
    // gsap.fromTo(
    //   appRef.current,
    //   {x:-50,opacity:0},
    //   {x:0, opacity:1, delay:2.3}
    // )
    // gsap.fromTo(
    //   appRef2.current,
    //   {x:50, opacity:0},
    //   {x:0, opacity:1, delay:2.3}
    // )
    gsap.fromTo(
      appRef1.current,
      { y:-70},
      { y:0, delay:2.3}
    )
  },[])

  return (
    <>
      <div className={style.header} ref={appRef1}>
        <nav className={`${style.menu} ${style.menu3}`}>
          <ul ref={appRef}>
            <li>
              <a href="#Dress">Dress</a>
            </li>
            <li>
              <a href="#Show">Show</a>
            </li>
            <li>
              <a href="#Furshet">Furshet</a>
            </li>
            <li>
              <a href="#Gallery">Gallery</a>
            </li>
          </ul>
        </nav>
        <div className={style.telephone} ref={appRef2}>
          <img src={imgTel} alt="telephone" className={style.tel} />
          <p>077-36-76-56</p>
        </div>
      </div>
    </>
  );
}
