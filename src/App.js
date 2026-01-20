// MADE BY: T.G.M.W.
// 1/16/26
// For csc260
// centreterm



import { useEffect, useState} from "react";
import Table from "./Table.js";



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

// function sortdataoriginal()
// {


// }

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
  // a.InstState>=b.InstState
  return 0;
  })

  setDataCopy(storearray1)
}


return (
<div className="App">
  <button>All</button>
  <button>Amounts</button>
  <button onClick={sortdatastates}>States</button>
  <button>D</button>
  <button>E</button>

  <Table data={dataCopy}></Table>






</div>);}

export default App;