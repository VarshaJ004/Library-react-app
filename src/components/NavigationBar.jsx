import React from 'react'

const Navigationbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#1E3A8A" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Libarary Hub</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-white active" href="#">Add Book</a>
              <a className="nav-link text-white" href="#">Search Book</a>
              <a className="nav-link text-white" href="#">Delete Book</a>
              <a className="nav-link text-white" href="#">View Book</a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigationbar