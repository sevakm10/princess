import { useLayoutEffect, useRef } from "react";
import style from "./Button2.module.css";
import gsap from "gsap";

export default function Button2() {
    const appRef = useRef(null)
    useLayoutEffect(() => {
        gsap.fromTo(
            appRef.current,
            {opacity:0},
            {opacity:1, delay:2.8}
        )
    })

  return (
    <div className={style.wrap} ref={appRef}>
      <button className={style.button}><a href="tel:077-36-76-56">Call us</a></button>
      <div className={style.span}></div>
    </div>
  );
}
