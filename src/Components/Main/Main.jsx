import style from './Main.module.css'
import Button2 from '../Buttons/Button2';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Main() {
    const appRef1 = useRef(null)
    const appRef2 = useRef(null)

    useLayoutEffect(() => {
      gsap.timeline()
          .fromTo(appRef1.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, delay:1,duration:1})
          .fromTo(appRef2.current, {  opacity: 0 }, { opacity: 1, duration:2});
  }, []);

    return (
        <>
          <div className={style.bc_img} id='Home'>
            <span className={style.blok} >
              <p className={style.p1} ref={appRef1}>Princess</p>
              <p className={style.p2} ref={appRef2}>wedding salon</p>
            </span>
            <Button2 />
        </div>
        </>
    )
}
