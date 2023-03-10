import React from 'react';
import './App.css';

function App() {

  const [text , setText]=React.useState("")
 const [todos,setTodos]=React.useState([])
 
const handleInputText=(e)=>{
  setText(e.target.value)
}

const handleButton=()=>{

const newArr={
  title:text,
  status:false,
}

setTodos([...todos,newArr])
}
console.log(todos)
  return (
    <div className="App">
   

   <>
   <h4>Text : {text}</h4>
   <input value={text} placeholder="Add Todo here"
   onChange={handleInputText}
   />

   <button onClick={handleButton}>Add</button>
</>

<ul>

{todos.map((el)=>(<li>{el.title}</li>))}

</ul>




    </div>
  );
}

export default App;
