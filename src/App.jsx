import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { House } from "lucide-react";
import { Store } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const App = () => {
  return (
    <div>
      <header>
        <h1 className="brand">Freaky</h1>
        <nav>
          <Link to="/">
            <House />
          </Link>{" "}
          <Link to="/shop">
            <Store />
          </Link>
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Freaky</h2>
            <p>
              At Freaky, we bring you the latest trends in fashion and jewelry
              for both men and women. Quality, style, and customer satisfaction
              are at the heart of everything we do.
            </p>
            <nav>
              <Link to="/">
                <House />
              </Link>{" "}
              <Link to="/shop">
                <Store />
              </Link>
              <Link to="/cart">
                <ShoppingCart />
              </Link>
            </nav>
          </div>

          <div className="footer-section links">
            <h2>Customer Service</h2>
            <ul>
              <li>
                <Link to="/shipping">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Freaky | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
