import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <Container fluid className="px-0">
      {children}
    </Container>
  );
};

export default Layout;
