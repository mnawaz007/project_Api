/* eslint-disable no-unused-vars */

// import {useState, useEffect} from 'react';

// export default  function Api() {
//     const [apiData, setApiData] = useState ([]);
//     const [err, setErr] = useState (false);
//     const [loading, setLoading] = useState (false);

//     // function for fetching Api data..
//  useEffect = async (( )=>{

//      setLoading(true)
//      try{
//          let res = await fetch('https://jsonplaceholder.typicode.com/posts')
//          if(res.ok){
//              let data = res.json();
//              setApiData(data)
//          }else{
//              throw new Error('error in network');
//          }
//      }catch(error){
//          setErr(error.message)
//      }finally{
//          setLoading(false)
//      }

//  }, [])
   
   

// if(loading) {
//     return <h2>Loading Data</h2>
// } else if (err){
//     return <h2> {err}</h2>
// }

// return(

//     <>  
//     <h3>List of Api Data</h3>
//     {/* <button className="btn btn-primary" onClick={HandleData}>Download data</button> */}
//     {
//         apiData.map(item => (
//             <h3 key = {item.id}>{item.name}</h3>
//         ))
//     }
//     </>
// )



// }

import { useState, useEffect } from 'react';

export default  function Api() {
  const [apiData, setApiData] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () =>  {
    setLoading(true);
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (res.ok) {
        let data = await res.json();
        setApiData(data);
      } else {
        throw new Error('error in network');
      }
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading Data</h2>;
  } else if (err) {
    return <h2>{err}</h2>;
  }

  return (
    <>
      <h3>List of Api Data</h3>
      {apiData.map((item) => (
        <div key={item.id}>
         <p>Title: {item.title}</p>
         
        </div>        
      
      ))}
    </>
  );
}
