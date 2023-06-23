import './root.css';
import { Route, Link, Routes } from 'react-router-dom';
import Scrape from '../scrape/scrape';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default function Root() {
  return (
    <Container className='root'>
      <Row>
        <Col className='left-panel'>
          <Link to='scrape'>
            <Button className='panel-button' variant="outline-primary">scrape</Button>
          </Link>
        </Col>
        <Col lg="8" className='right-panel'>
          <Routes>
            <Route path="scrape" element={<Scrape />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
