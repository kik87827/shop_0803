import { useParams } from "react-router-dom";

function DetailPage({ shoes }) {
  let { urlid } = useParams();
  let shoesFinded = shoes.find(obj => obj.id === Number(urlid));
  return (
    <div className="container">
       <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${shoesFinded.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoesFinded.title}</h4>
          <p>{shoesFinded.content}</p>
          <p>{shoesFinded.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default DetailPage;