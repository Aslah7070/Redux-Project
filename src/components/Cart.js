import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector,useDispatch} from "react-redux"
import {deleteItem} from "../redux/cartSlice"
 const Cart = () => {
   const products= useSelector((state)=>state.cart.value)
   console.log( "prodbds",products);
   
  const dispatch=useDispatch()
   const removeItem=(id)=>{
    dispatch(deleteItem(id))
   }

   const cards=products.map((data)=>(
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
  <Button  onClick={()=>removeItem(data.id)}  variant="danger">remove Item</Button>
  </Card.Footer>
</Card>
</div>
))

  return (
    <div className='row'>
    {cards}
  </div>
  )
}

export default Cart
