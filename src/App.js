
import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bgimg from './img/bg-1.png';
import { useState } from 'react';
import shoesData from './shoes'; 
import { Routes, Route, Link } from 'react-router-dom';
import DetailPage from './pages/DetailPage';

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

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{backgroundImage : `url(${bgimg})`}}></div>
            <div>
              <Container>
                <Row>
                  {
                    shoes.map((item)=>{
                      return (
                        <ShoesCard senditem={item} key={item.id} />
                      )
                    })
                  }
                </Row>
              </Container>
            </div>
          </>
        } />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>
      
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
