import LoadingIndicator from "./LoadingIndicator";
import React from "react";
import CountriesCard from './CountriesCard';
import Pagination from './Pagination';
function Countries() { 
const [page ,setPage]=React.useState(1)
const [loading,setLoading]=React.useState(true)
const [cntry , setCntry] = React.useState([])
const [ttpages , settPages]=React.useState(10)
const getdataa=()=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`).then((res)=>res.json())
}

React.useEffect(()=>{
datafromapi(page)
},[page])


const datafromapi = async ()=>{
try {
  setLoading(true)
  const datass = await getdataa();
 
  console.log(datass)
  setCntry(datass.data)
  settPages(datass.totalpages)
  setLoading(false)
} catch (error) {
  console.log(error)
}

    
  }
   if (loading)  return  <LoadingIndicator /> 

   return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
      {cntry && cntry.map((el,index)=>(
      
      <CountriesCard
      key={el.id}
      country={el.country}
      population={el.population} 

     /> 
     ))}  
      </div>
      <div>
        {/* Pagination */}
      <Pagination 
       current={page}
      total={ttpages}
      onChange={(page)=>setPage(page)}
      />
  
      </div>
    </div>
  );
}

export default Countries;
