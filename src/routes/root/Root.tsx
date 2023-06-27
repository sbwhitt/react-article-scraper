import './Root.css';
import { Route, Link, Routes } from 'react-router-dom';
import Scrape from '../scrape/Scrape';
// import Gpt from '../gpt/gpt';
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
            <Button className='panel-button' variant="primary">scrape</Button>
          </Link>
          {/* <Link to='gpt'>
            <Button className='panel-button' variant="primary">gpt</Button>
          </Link> */}
        </Col>
        <Col lg="8" className='right-panel'>
          <Routes>
            <Route path="scrape" element={<Scrape />} />
            {/* <Route path="gpt" element={<Gpt />} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
