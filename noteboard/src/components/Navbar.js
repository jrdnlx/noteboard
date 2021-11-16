const Navbar = () => {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            NoteBoard
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/fav">Favourites</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
