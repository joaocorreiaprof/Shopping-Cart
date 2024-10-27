import image1 from "../assets/images/vertical-girl.jpg";
import image2 from "../assets/images/vertical-men.jpg";
import image3 from "../assets/images/vertical-menn.jpg";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="main-content">
      <div className="first-text">
        <h1 style={{ fontSize: "50px" }}>Elevate your power,</h1>
        <h2>Be yourself!</h2>
      </div>
      <div className="first-img">
        <img src={image1} alt="Image three" />
      </div>
    </div>
  );
};

export default Homepage;
