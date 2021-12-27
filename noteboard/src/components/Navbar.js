import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <Link class="navbar-brand" to="/">
            NoteBoard
          </Link>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
