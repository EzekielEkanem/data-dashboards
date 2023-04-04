import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <h1>New York State Breweries</h1>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link 
              to="/">
              Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;