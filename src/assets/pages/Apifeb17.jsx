/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import DataApi from "./DataApi";

const Apifeb17 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    const fetchUsers = async (endPoint) =>{  
        setLoading(true)
        try{ 
            let res = await fetch('https://fakestoreapi.com/'+ endPoint);
            if(res){
                let user = await res.json();
                setUsers(user);       
            }
            else{ throw new Error('error in network') }
            
        }catch(error){
            setErr(error.message)
        }finally{
            setLoading(false)
        }

    }

    const electronics = ()=>{
        fetchUsers('products/category/electronics');
    }
    const men = ()=>{
        fetchUsers("products/category/men's clothing");
    }
    const women = ()=>{
        fetchUsers("products/category/women's clothing");
    }

    const sortItems = () =>{
        fetchUsers('products?sort=desc');
    }
    const limitResult = () =>{
        fetchUsers('products?limit=10');
    }
    const category = () =>{
        fetchUsers('products/category/jewelery');
        return <h3>Handle click 3</h3>
    }

    useEffect(() => {
         fetchUsers('products');
    }, []);




    if(loading){
        return <h2>Loading Data</h2>
    }
    else if(err){
        return <h2> {err}</h2>
    }
    else{

      
   

  return (


    <>
   
    <div className=" container bg-body-secondary ">
    <h3>Total Items : {users.length}</h3>   
    <div className="row"> 
    <div className="col mx-auto justify-content-center ">

    <button onClick={sortItems} className="btn btn-outline-dark mx-2">Decending order </button>
    <button onClick={limitResult} className="btn btn-outline-dark mx-2">Limit to 10 </button>
    <button onClick={category} className="btn btn-outline-dark mx-2">Show Jewelery </button>
    <button onClick={electronics} className="btn btn-outline-dark mx-2">Show Electronics </button>
    <button onClick={men} className="btn btn-outline-dark mx-2">Mens Clothing </button>
    <button onClick={women} className="btn btn-outline-dark mx-2">Womens Clothing </button>
    </div>
    </div>
        <div className="row ">
            {users.map(user => (
                <div className="col-lg-4 col-md-6 mt-5 " key={user.id}> 
                 <Card style={{ width: '18rem' }} >
                 <Card.Img variant="top" src={user.image} className="w-50 img-fluid d-block mx-auto m-2" />
                 <Card.Body>
                        <h4>id : {user.id}</h4>
                   <Card.Title>{user.title}</Card.Title>
                   <Card.Text>
                    
                   </Card.Text>
                   <h5>Category : {user.category}</h5>
                   <h2>Price : {user.price}</h2>
                 </Card.Body>
               </Card>
                </div>
            ))}
        </div>
    </div>
   
    
    </>
    
  ) }  
}

export default Apifeb17





