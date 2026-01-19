// MADE BY: T.G.M.W.
// 1/16/26
// For csc260
// centreterm



import { useEffect, useState} from "react";

function App() {

 const [data,setData]=useState([]);

  useEffect(() =>{
    async function fetchData()
    {

    const url = "/NEH2020sGrant_Short.json";
    const response = await fetch(url);

    if (response.ok) 
      {
      const result = await response.json();
      console.log(result.Grants.Grant)
      setData(result.Grants.Grant)
      }

  
    }
    fetchData()
    function drawTable(props){
      <table>
      <td> Project Title</td>
      <td>Institution</td>
      </table>}
      

  },[]);

// YES YOU HAVE YOUR EMPTY ARRAY, TORI

  return (<div className="App">
  <>
  <table>
    <thead>
      <td> Project Title</td>
      <td>Institution</td>
    </thead>
    grant
    <tbody>

 
    </tbody>
    </table>
  </>



</div>);}

export default App;
