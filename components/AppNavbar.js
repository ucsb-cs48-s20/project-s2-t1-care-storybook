import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function AppNavbar(props) {
  const user = props.user;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref={true}>
          <Navbar.Brand>take care of you and your plant</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            {user && (
              <Link href="/journal" passHref={true}>
                <Nav.Link>journal</Nav.Link>
              </Link>
            )}
          </Nav>
          <Link
            href="https://github.com/ucsb-cs48-s20/project-s2-t1-care"
            passHref={true}
          >
            <Navbar.Brand>github</Navbar.Brand>
          </Link>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <>
                    Hi, {user.name}
                    <Image
                      className="ml-2"
                      src={user.picture}
                      width={24}
                      height={24}
                    />
                  </>
                }
              >
                <NavDropdown.Item className="text-danger" href="/api/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button variant="success" data-cy="login" href="/api/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
