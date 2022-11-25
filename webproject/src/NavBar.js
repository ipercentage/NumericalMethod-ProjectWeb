import React from "react";
import { Navbar ,Container ,Nav ,NavDropdown } from "react-bootstrap";

export const NavBar = () =>
{
    return(
        <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand bg="primary" variant="dark" href ="/" >
          <babel>Numerical Methods</babel>
        </Navbar.Brand>
        
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

        <NavDropdown title="Roots of Equations" id="nav-dropdown">
            <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
            <NavDropdown.Item href="/FalsePosition">False-Position</NavDropdown.Item>
            <NavDropdown.Item href="/OnePoint">One-Point</NavDropdown.Item>
            <NavDropdown.Item href="/NewtonRaphson">Newton-Raphson</NavDropdown.Item>
            <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Linear Equations" id="nav-dropdown">
            <NavDropdown.Item href="/Cramer">Cramer's Rule</NavDropdown.Item>
            <NavDropdown.Item href="/GaussElimination">Gauss Elimination</NavDropdown.Item>
            <NavDropdown.Item href="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
            <NavDropdown.Item href="/Jacobi">Jacobi</NavDropdown.Item>
            <NavDropdown.Item href="/Seidel">Gauss-Seidel</NavDropdown.Item>
            <NavDropdown.Item href="/Conjugate">Conjugate Gradient</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Interpolation" id="nav-dropdown">
            <NavDropdown.Item href="/Newton">Newton's divied</NavDropdown.Item>
            <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
            <NavDropdown.Item href="/Spline">Spline</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Regression" id="nav-dropdown">
            <NavDropdown.Item href="/LeastSquares">Least-Squares</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

