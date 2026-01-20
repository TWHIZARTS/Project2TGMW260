// MADE BY: T.G.M.W.
// 1/16/26
// For csc260
// centreterm



import { useEffect, useState} from "react";
import Table from "./Table.js";



function App() {

 const [data,setData ]= useState([]);

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

      }
    }

    fetchData()



  },[]);


// YES YOU HAVE YOUR EMPTY ARRAY, TORI

  return (
  <div className="App">
    <Table data={data}> </Table>
  


</div>);}

export default App;




  //  <table>
  // <thead>
  //   <tr>
  //     <td>Project Title</td>
  //     <td>Institution</td>
  //   </tr>

  // </thead>

  // <tbody>
  //   <tr>
  //     <td>hiiii</td>
  //   </tr>
  // </tbody>
  
  // </table>