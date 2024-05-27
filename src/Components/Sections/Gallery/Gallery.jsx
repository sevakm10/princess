import style from './Gallery.module.css';
import img1 from '../../../assets/c/c1.jpg';
import img2 from '../../../assets/c/c2.jpg';
import img3 from '../../../assets/c/c3.jpg';
import img4 from '../../../assets/c/c4.jpg';
import img5 from '../../../assets/c/c5.jpg';
import img6 from '../../../assets/c/c6.jpg';
import img7 from '../../../assets/c/c7.jpg';
import img8 from '../../../assets/c/c8.jpg';
import img9 from '../../../assets/c/c9.jpg';
import img10 from '../../../assets/c/c10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Gallery() {
  return (
    <div className={style.carousel} id='Gallery'>
      <div className={style.carouselTrack}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className={style.img} />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt="" className={style.img} />
        ))}
      </div>
    </div>
  );
}
