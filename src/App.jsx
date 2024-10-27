import { Link, Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div>
      <header>
        <h1 className="brand">Freaky</h1>
        <nav>
          <Link to="/">Home</Link> <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default App;
