import React,{useEffect} from 'react'

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useDispatch,useSelector} from "react-redux"
import {add} from "../redux/cartSlice"
import { getProduct } from '../redux/produclice';
const Products = () => {
 const {products:productData,status}=useSelector((state)=>state.prod)
 console.log( "proo",productData);
 
  const dispatch=useDispatch()
  //  const [product,setProduct]=   useState([])
    useEffect( ()=>{
  

      dispatch(getProduct())
// const fetch=async()=>{
//     let responce= await  axios.get("http://fakestoreapi.com/products")
// console.log(responce.data);
// setProduct(responce.data)
// }
// fetch()

    },[])
    if(status==="Loading"){
      return <p>loading.........</p>
    }
    if(status==="failed"){
      return <Alert key="danger" variant='danger'>something wrong</Alert>
    }
    const addToCart=(data)=>{
        dispatch(add(data))
    }
    const cards=productData.map((data)=>(
        <div key={data.id} className="col-md-3 mt-3">
        
        <Card  style={{ width: '18rem' } }className="h-100">
            <div className='text-center'>
            <Card.Img variant="top" src={data.image} style={{height:"130px",width:"100px"}}  />
            </div>

      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        INR : {data.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{backgroundColor:"white"}}>
      <Button onClick={()=>addToCart(data)} variant="primary">Add to cart</Button>
      </Card.Footer>
    </Card>
    </div>
    ))
  return (
    <>
    <h1>productDashboard</h1>
    <div className="row">
        {cards}
    </div>
    </>
  )
}

export default Products
