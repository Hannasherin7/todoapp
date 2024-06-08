import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">TODOApp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add TODO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">SEARCH TODOT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">DELETE TODO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewAll">VIEW ALL</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
