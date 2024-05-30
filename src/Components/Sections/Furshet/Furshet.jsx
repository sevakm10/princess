import style from "./Furshet.module.css";
import furshetImg from "../../../assets/furshet1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";


export default function Furshet() {
    gsap.registerPlugin(ScrollTrigger);
const appRef1 = useRef(null)
const appRef2 = useRef(null)
useEffect(()=>{
  gsap.fromTo(
    appRef1.current, {
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      scrollTrigger: {
        trigger: appRef1.current,
        start: "top 80%",
      }
    }
  );
  gsap.fromTo(
    appRef2.current, {
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      scrollTrigger: {
        trigger: appRef2.current,
        start: "top 80%",
      }
    }
  );
  
},[])

  return (
    <div className={style.furshet} id="Furshet">
      <div className={style.block}>
        <div className={style.blockText}>
          <div ref={appRef1}>
            <h2>Furshet</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              modi sunt dolorem deleniti, consectetur accusantium. Dolore animi
              accusantium pariatur?
            </p>
          </div>
        </div>
        <img src={furshetImg} alt="" className={style.img} ref={appRef2}/>
      </div>
    </div>
  )
}
