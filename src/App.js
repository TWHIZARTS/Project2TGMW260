// MADE BY: T.G.M.W.
// 1/16/26
// For csc260
// centreterm



import { useEffect, useState} from "react";
import Table from "./Table.js";
import './Table.css'


function App() {
const [data,setData ]= useState([]);
const [dataCopy,setDataCopy]= useState(data);

  useEffect(() =>{
    async function fetchData()
    {

    const url = "/NEH2020sGrant_Short.json";
    const response = await fetch(url);

    if (response.ok) 
      {
      const result = await response.json();
      // console.log(result)
      console.log(result.Grants.Grant);
      let storearray=result.Grants.Grant;
      setData(storearray);
      setDataCopy(storearray);
      }
    }
    fetchData()
  },[]);


// SORTS DATA BY ORIGINAL
function sortdataoriginal()
{
setDataCopy(data)
}

// SORTS DATA BY STATE
function sortdatastates()
{ 
  let storearray1=[...data]
  storearray1.sort((a, b)=>
  {
  const nameA = a.InstState.toUpperCase(); 
  const nameB = b.InstState.toUpperCase(); 

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  return 0;
  })

  setDataCopy(storearray1)
}

// SORTS DATA BY AMOUNT
function sortdataamount()
{ 
  let storearray1=[...data]
  storearray1.sort((a, b)=>
  {
  const nameA = a.OriginalAmount.toUpperCase(); 
  const nameB = b.OriginalAmount.toUpperCase(); 

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  return 0;
  })

  setDataCopy(storearray1)
}

// SORTS DATA BY PROGRAM
function sortdataprogram()
{ 
  let storearray1=[...data]
  storearray1.sort((a, b)=>
  {
  const nameA = a.Program.toUpperCase(); 
  const nameB = b.Program.toUpperCase(); 

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  return 0;
  })

  setDataCopy(storearray1)
}

// SORTS DATA BY KENTUCKY
function sortdatakentucky()
{
  let storearray1=[...data]
  let storearray2=[]
  for (let i = 0; i < storearray1.length; i++)
  {
    // console.log(storearray1[i].InstState)
    if (storearray1[i].InstState==="KY")
      {
       storearray2.push(storearray1[i])
      }


    setDataCopy(storearray2)
  }
 
   
}


// SORTS DATA BY PROJECT TITLE
function sortdataprogramtitle()
{ 
  let storearray1=[...data]
  storearray1.sort((a, b)=>
  {
  const nameA = a.ProjectTitle.toUpperCase(); 
  const nameB = b.ProjectTitle.toUpperCase(); 

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  return 0;
  })

  setDataCopy(storearray1)
}




// function sortdataselfdestruct(){setDataCopy([])} To be clear this is a joke




return (
<div className="App">

  <div className="ButtonGroup">
  <button onClick={sortdataoriginal}>All Data</button>
  <button onClick={sortdataprogramtitle}>Title</button>
  <button onClick={sortdataamount}>Amounts</button>
  <button onClick={sortdatastates}>States</button>
  <button onClick={sortdataprogram}>Program</button>
  <button onClick={sortdatakentucky}>Kentucky</button>
  
  </div>
  {/* <button onClick={sortdataselfdestruct}>Self Destruct</button> */}
  
  <Table data={dataCopy}></Table>

</div>);}

export default App;