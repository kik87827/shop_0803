
import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bgimg from './img/bg-1.png';
import { useState } from 'react';
import shoesData from './shoes'; 
import { Routes, Route, useNavigate} from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg || 'yellow' };
  color: ${ props => props.bg == 'green' ? '#fff' : '#000'};
  padding: 10px;
`

let NewBtn = styled(YellowBtn)`
  border : 2px solid red;
`;

let Box = styled.div`
  background : grey;
  padding : 20px;
`

function App() {
  let navigate = useNavigate();

  let [shoes,setShoes] = useState(shoesData);

  return (
    <div className="App">
      <Box>
        <YellowBtn>버튼</YellowBtn>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <NewBtn bg="green">버튼</NewBtn>
      </Box>
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
{/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{ backgroundImage: `url(${bgimg})` }}></div>
            
            <div>
              <button onClick={() => {
                let copyItem = [...shoes];
                let filterItem = copyItem.sort((objA, objB) => objA.title.localeCompare(objB.title));
                setShoes(filterItem);
              }}>가나다 정렬</button>
            </div>
            <div>
              <Container>
                <Row>
                  {
                    shoes.map((item,index)=>{
                      return (
                        <ShoesCard senditem={item} key={item.id} clickIndex={index} navigate={navigate} />
                      )
                    })
                  }
                </Row>
              </Container>
            </div>
          </>
        } />
        <Route path="/detail/:urlid" element={<DetailPage shoes={shoes} />} />
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

function ShoesCard({ senditem, clickIndex, navigate  }) {
  return(
    <Col xs={12} md={4}>
      <div onClick={() => {
        navigate('/detail/' + clickIndex);
      }}>
        <img src={process.env.PUBLIC_URL + `/shoes${senditem.id+1}.jpg`} width="80%" alt="" />
        <h4>{senditem.title}</h4>
        <p>{senditem.content}</p>
        <p>{senditem.price}원</p>
      </div>
    </Col>
  )
}

export default App;
