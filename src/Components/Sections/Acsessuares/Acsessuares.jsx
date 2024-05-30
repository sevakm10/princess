import style from "./Acsessuares.module.css";
import a1 from "../../../assets/a1.jpg";
import a2 from "../../../assets/a2.jpg";
import a3 from "../../../assets/a3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Acsessuares() {
  gsap.registerPlugin(ScrollTrigger);
  const appRef1 = useRef(null);
  const appRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      appRef1.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: appRef1.current,
          start: "top 60%",
        },
      }
    );
    gsap.fromTo(
      appRef2.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: appRef2.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className={style.show}>
      <div className={style.block}>
        <div className={style.blockText} ref={appRef1}>
          <div>
            <h2>Acsessuares</h2>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              modi sunt dolorem deleniti, consectetur accusantium. Dolore animi
              accusantium pariatur?
            </h3>
          </div>
        </div>
        <div className={style.imgs} ref={appRef2}>
          <img src={a1} alt="" className={style.img1} />
          <img src={a2} alt="" className={style.img2} />
          <img src={a3} alt="" className={style.img3} />
        </div>
      </div>
    </div>
  );
}
