import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

/* class Detail2 extends React.Component {
  componentDidMount() {
    
  }
  componentDidUpdate() {
    
  }
  componentWillUnmount() {
    
  }
} */

function DetailPage({ shoes }) {

  useEffect(() => {
    let setTimer = 0;
    setTimer = setTimeout(() => {
      SetBannerIs(false);
    }, 2000);
    return () => {
      if (setTimer) {
        clearTimeout(setTimer);
      }
    }
  });
 

  let [count, setCount] = useState(0);
  let { urlid } = useParams();
  let shoesFinded = shoes.find(obj => obj.id === Number(urlid));
  let [bannerIs, SetBannerIs] = useState(true);
  let [inputValue, SetInputValue] = useState('');
  let [inputMessage, SetInputMessage] = useState(false);
  let [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    console.log('first')
  },[]);
  useEffect(() => {
    console.log('effect count')
    return () => {
      console.log('unmount')
    }
  },[count]);

  return (
    <div className="container">
      <button onClick={() => { setCount(count + 1) }}>테스트 카운트</button>
      {
        bannerIs ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
      }
      
      { count }
       <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${shoesFinded.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <div><input type="text" onInput={(e) => {
            let eValue = e.target.value;
            SetInputValue(eValue);
            SetInputMessage(isNaN(eValue));
          }} value={inputValue} /></div>
          {
            inputMessage ? <p style={{color : 'red'}}>숫자만 입력</p> : null
          }
          <h4 className="pt-5">{shoesFinded.title}</h4>
          <p>{shoesFinded.content}</p>
          <p>{shoesFinded.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey={`link${tabActive}`}>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTabActive(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTabActive(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTabActive(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabActive={tabActive} />
    </div> 
  )
}

function TabContents({tabActive}) {
  return [
    <div>내용0</div>,
    <div>내용1</div>,
    <div>내용2</div>
  ][tabActive]
}
export default DetailPage;