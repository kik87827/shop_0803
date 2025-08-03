
import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bgimg from './img/bg-1.png';
import { useState } from 'react';
import shoesData from './shoes'; 

function App() {

  let [shoes] = useState(shoesData);

  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{backgroundImage : `url(${bgimg})`}}></div>
      <div>
        <Container>
          <Row>
            {
              shoes.map((item,index)=>{
                return (
                  <ShoesCard senditem={item} key={item.id} />
                )
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  );
}

function ShoesCard({senditem}){
  return(
    <Col xs={12} md={4}>
      <img src={process.env.PUBLIC_URL + `/shoes${senditem.id+1}.jpg`} width="80%" alt="" />
      <h4>{senditem.title}</h4>
      <p>{senditem.content}</p>
      <p>{senditem.price}원</p>
    </Col>
  )
}

export default App;
