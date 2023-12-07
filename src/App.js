// import logo from './logo.svg';
// import './App.css';
import NavbarSection from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import  './images/airplane-seats-gce831a9cf_1280.jpg';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Container, Button, Row, Col, Card, Image } from 'react-bootstrap';

function App() {
  return (
    <>
      < NavbarSection />

      <main>
        <Container className='mt-5'>
          <Row>
            <Col md={6}>
              <Image src={require('./images/airplane-seats-gce831a9cf_1280.jpg')} fluid rounded/>
            </Col>
            <Col md={6}>
              <h3 className='text-primary'>Welcome </h3>
              <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </Container>
        <section className='mt-5'>
          <Container>
            <Row>
              <Col className='py-5'>
                <Card className='shadow'>
                  <Card.Img variant="top" src={require('./images/airplane-seats-gce831a9cf_1280.jpg')} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Card.Text>
                    <Button variant="outline-info">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='py-5'>
                <Card className='shadow'>
                  <Card.Img variant="top" src={require('./images/airplane-seats-gce831a9cf_1280.jpg')}  fluid />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Card.Text>
                    <Button variant="outline-info">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
