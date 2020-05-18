import Container from "react-bootstrap/Container";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import Header from "./Header";

function Layout(props) {
  const user = props.user;

  return (
    <>
      <Header />
      <AppNavbar user={user} />
      <Container>{props.children}</Container>
      {/* <AppFooter /> */}
    </>
  );
}

export default Layout;
