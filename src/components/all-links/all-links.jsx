
import React from 'react'
import {
  Link
} from "react-router-dom";

import './all-links.scss';
function AllLinks() {
    return (
        <div className="all-links">
          <Link to="/">Home</Link>
          <Link to="/sancharam">Sancharam</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/programs">Programs</Link>

          <Link to="/buy/episode">Buy Episode</Link>
          <Link to="/buy/dvd">Buy DVD</Link>
          <Link to="/buy/books">Buy Books</Link>

          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
    )
}

export default AllLinks

