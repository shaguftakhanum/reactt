import React from "react";
import{NavLink} from "react-router-dom";
const Header=()=>{
    return(
    <>

{/* <header>
        <nav>
        <ul>
        <li><NavLink to="/">Blog</NavLink></li>
        <li><NavLink to="/post">Post</NavLink></li>
        <li><NavLink to="/tag">Tag</NavLink></li>
        </ul>
        </nav>
    </header> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <li><NavLink to="/" className="nav-link active">Blog</NavLink></li>
        </li>
        <li className="nav-item">
        <li><NavLink to="/post"  className="nav-link">Post</NavLink></li>
        </li>
        <li className="nav-item">
        <li><NavLink to="/tag" className="nav-link">Tag</NavLink></li>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>);
}
export default Header;