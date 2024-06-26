import "./Footer.css";
import f from "../../assets/facebook.svg";
import i from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>Հանրապետության 10/12</h2>
        <p><a href="tel:077-36-76-56">077-36-76-56</a></p>
      </div>
      <ul className="wrapper">
        <a href="https://www.facebook.com/knarik.tonakanian" target="_blank" rel="noopener noreferrer">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <img src={f} alt="Facebook" className="f"/>
          </li>
        </a>
        <a href="https://www.instagram.com/princess__weddingsalon/" target="_blank" rel="noopener noreferrer">
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <img src={i} alt="Instagram" className="i"/>
          </li>
        </a>
      </ul>
    </div>
  );
}
