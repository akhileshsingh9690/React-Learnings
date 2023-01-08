import React from "react";
import { useEffect } from "react";
const Sample=()=>{


const handlepageji = (cat)=>{
setPage(page + cat)
}


const [data,setData] = React.useState([]);
const [loading,setLoading]=React.useState(false);
const [page,setPage]= React.useState(1)
useEffect(()=>{
 
    addhandlefetch(page)

},[page])



const getData=(page)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then((res)=>res.json());
}



const addhandlefetch= async(page)=>{
setLoading(true)
try {
    let datass = await getData(page)
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
 <button onClick={()=>handlepageji(-1)} disabled={page === 1}>Previous</button>
 <button disabled>{page}</button>   
 <button disabled={page >= 10} onClick={()=>handlepageji(1)}>Next</button>   

   </div>
 




  </div>
     


  )
}


export default Sample;