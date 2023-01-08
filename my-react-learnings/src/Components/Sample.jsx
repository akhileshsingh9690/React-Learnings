import React from "react";
import { useEffect } from "react";
const Sample=()=>{

const [data,setData] = React.useState([]);
const [loading,setLoading]=React.useState(false);
const [page,setPage]= React.useState(1)
useEffect(()=>{
 
    addhandlefetch()

},[])



const getData=()=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then((res)=>res.json());
}



const addhandlefetch= async()=>{
setLoading(true)
try {
    let datass = await getData()
    setData(datass)
    setLoading(false)
    console.log(datass)    
} catch (error) {
    console.log(error)
    setLoading(false)
}    

    
}

  return  loading ? (<h2>Loading...</h2>) :  (
  <div id="main">
 
   <div>
   <h2>Posts</h2>
   {/* <button onClick={addhandlefetch}>ADD</button> */}
    
  
   <ul>

 {data.map((el)=>(<li>{el.title}</li>))}

   </ul>
 <button onClick={()=>{setPage(page )}}>Previous</button>
 <button>{page}</button>   
 <button>Next</button>   

   </div>
 




  </div>
     


  )
}


export default Sample;