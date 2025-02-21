import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar1(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      {props.title}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {props.Home}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Textform1
          </a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
      <div className="form-check form-switch text-light">
  <input
    onClick={props.toggleMode}
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    Enable DarkMode
  </label>
</div>

    </div>
  </div>
</nav>


  )
}

Navbar1.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string

}
Navbar1.defaultProps = {
  title: 'set title here',
  aboutText: 'About'
}
