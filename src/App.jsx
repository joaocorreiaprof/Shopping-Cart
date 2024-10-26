import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/shop">Shop</Link>
      </nav>
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
