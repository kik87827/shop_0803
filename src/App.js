
import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bgimg from './img/bg-1.png';
import { useState } from 'react';
import shoesData from './shoes'; 
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';

function App() {

  let [shoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className="App">
      
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>Back</Nav.Link>
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
        <Route path="/about" element={<AboutPage />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
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
