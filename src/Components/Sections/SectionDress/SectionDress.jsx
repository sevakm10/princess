import style from "./SectionDress.module.css";
import dress from "../../../assets/dress.jpg";
import dress2 from "../../../assets/dress2.jpg";
import dress3 from "../../../assets/dress3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";


export default function SectionDress() {
gsap.registerPlugin(ScrollTrigger);
const appRef1 = useRef(null)
const appRef2 = useRef(null)
const appRef3 = useRef(null)
const appRef4 = useRef(null)

useLayoutEffect(()=>{
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
  gsap.fromTo(
    appRef3.current, {
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      scrollTrigger: {
        trigger: appRef3.current,
        start: "top 80%",
      }
    }
  );
  gsap.fromTo(
    appRef4.current, {
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      scrollTrigger: {
        trigger: appRef4.current,
        start: "top 80%",
      }
    }
  );
  
},[])

  return (
    <div  className={style.sectionDress} id="Dress">
      <div className={style.text} ref={appRef1}>
        <h2>Wedding dress</h2>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          doloribus, a voluptas aperiam ut quis reiciendis.
        </h3>
      </div>
      <div className={style.imgDress}>
        <img src={dress2} alt="" className={style.imgSmall}  ref={appRef2}/>
        <img src={dress} alt="" className={style.img}  ref={appRef3}/>
        <img src={dress3} alt="" className={style.imgSmall}  ref={appRef4}/>
      </div>
    </div>
  );
}
