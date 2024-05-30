import { useEffect, useRef } from "react";
import style from "./Button2.module.css";
import gsap from "gsap";

export default function Button2() {
    const appRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            appRef.current,
            { opacity: 0 },
            { opacity: 1, delay: 2.8 }
        );
    }, []);

    const handleClick = (e) => {
        console.log('1');
        e.stopPropagation(); // Предотвращает всплытие события, чтобы гарантировать вызов обработчика
    };

    return (
        <div className={style.wrap} ref={appRef}>
            <div className={style.button}>
                <a href="tel:+37477367656" onClick={handleClick}>Call us</a>
            </div>
            <div className={style.span}></div>
        </div>
    );
}
