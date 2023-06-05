import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import { Sigin } from "./components/Sigin";
import { Sigup } from "./components/Sigup";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";


function App() {
  return (
    <Container className="text-center aling-content-center">
     
        <Row>
          <Col>
            <Sigin />
          </Col>
          <Col>
            <Sigup />
          </Col>
        </Row>
    
    </Container>
  );
}

export default App;
