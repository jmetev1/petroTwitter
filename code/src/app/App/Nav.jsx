/* START SOLUTION */
var Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInputChange={handleSearchInputChange}/>
    </div>
  </nav>
);
/* ELSE
var Nav = () => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search />
    </div>
  </nav>
);
END SOLUTION */

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
