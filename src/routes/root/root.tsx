import './root.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default function Root() {
  return (
    <Container className='root'>
      <Row>
        <Col>
          <Link to='one'>
            <Button variant="outline-primary">One</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
