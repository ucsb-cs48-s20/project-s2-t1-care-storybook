import Container from "react-bootstrap/Container";

var style1 = {
  position: "absolute",
  bottom: "10px",
  textAlign: "center",
  margin: "auto",
}

function AppFooter() {
  return (
    <Container style = {style1}>
      This is a demo of our interactive self-care journal. Check out the source
      code on{" "}
      <a href="https://github.com/ucsb-cs48-s20/project-s2-t1-care">GitHub</a>!
    </Container>
  );
}

export default AppFooter;
