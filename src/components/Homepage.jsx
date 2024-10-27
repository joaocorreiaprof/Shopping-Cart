import image1 from "../assets/images/vertical-girl.jpg";
import image2 from "../assets/images/vertical-men.jpg";
import image3 from "../assets/images/vertical-menn.jpg";
import fit1 from "../assets/images/fit1.jpg";
import fit2 from "../assets/images/fit2.jpg";
import fit3 from "../assets/images/fit3.jpg";
import jewl1 from "../assets/images/jewl1.jpg";
import jewl2 from "../assets/images/jewl2.jpg";
import jewl3 from "../assets/images/jewl3.jpg";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="main-container">
      <div className="container-one">
        <div className="first-div">
          <div className="first-text-content">
            <h1 style={{ fontSize: "60px" }}>Elevate your power,</h1>
            <h2 style={{ fontSize: "40px" }}>Be yourself!</h2>
            <div className="button-container">
              <Link to="/shop">
                <button className="shop-button">Find Your Fit</button>
              </Link>
            </div>
          </div>
          <div className="first-images-display">
            <img className="fit" src={fit1} alt="Image three" />
            <img className="fit" src={fit2} alt="Image three" />
            <img className="fit" src={fit3} alt="Image three" />
          </div>
        </div>
        <div className="first-img">
          <img className="image1" src={image1} alt="Picture of a women" />
        </div>
      </div>
      <div className="container-two">
        <div className="second-img">
          <img className="image2" src={image2} alt="Picture of a man" />
        </div>
        <div className="about-section">
          <h1>About us</h1>
          <p>
            Welcome to Freaky, where fashion meets inclusivity and style knows
            no boundaries. We believe that clothing is more than just what you
            wear—it is a form of self-expression, a statement of individuality,
            and a celebration of diversity. Our mission is to bring you a
            thoughtfully curated selection of apparel and jewelry designed to
            empower everyone, no matter who they are. Our collections span a
            wide variety of styles, from timeless classics to bold, trendsetting
            pieces, catering to both men and women. We are dedicated to
            celebrating all body types, backgrounds, and identities, because
            true beauty lies in our differences. Every item is crafted with
            quality and comfort in mind, ensuring you feel confident in every
            piece. At Freaky, we are driven by a vision of fashion where
            everyone belongs. Join us in embracing diversity, expressing
            yourself, and finding pieces that not only look great but also feel
            just right.
          </p>
          <div className="second-button-container">
            <Link to="/shop">
              <button className="shop-button">Uncover Your Next Look</button>
            </Link>
          </div>
          <div className="second-images-display">
            <img className="fit" src={jewl1} alt="Model image" />
            <img className="fit" src={jewl2} alt="Model image" />
            <img className="fit" src={jewl3} alt="Model image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
