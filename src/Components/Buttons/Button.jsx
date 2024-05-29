import style from './Button.module.css';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Button() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        gsap.fromTo(containerRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, delay: 2.3 }
        );
    }, []);

    return (
        <div ref={containerRef}>
            <button className={style.button}><a href="tel:077-36-76-56">Call us</a></button>
        </div>
    );
}
