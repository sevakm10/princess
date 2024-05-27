import style from "./Show.module.css";
import showImg from "../../../assets/show3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";





export default function Show() {
  const appRef1 = useRef(null);
  const appRef2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(()=>{
    gsap.fromTo(
      appRef1.current, {
        opacity:0,
        y:50
      }, {
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
      }, {
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
    <div className={style.show} id="Show">
      <div className={style.block}>
        <img src={showImg} alt="" className={style.img} ref={appRef1}/>
        <div className={style.blockText}>
          <div ref={appRef2}>
            <h2>Show princess</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              modi sunt dolorem deleniti, consectetur accusantium. Dolore animi
              accusantium pariatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
