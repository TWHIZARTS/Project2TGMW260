// MADE BY: T.G.M.W.
// 1/16/26
// For csc260
// centreterm



import { useEffect, useState} from "react";



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

function DrawTable({props})
{
  return(
    <table>
    
      <thead>
        <td> Project Title </td>
        <td> Institution </td>
      </thead>

      <tbody>
      </tbody>
      
    </table>
  )
}

function TableRow({props})
{
  return(
  props.map(item=>
    <tr>{item}</tr>
  )
  )
}




  },[]);


// YES YOU HAVE YOUR EMPTY ARRAY, TORI

  return (
  <div className="App">
  


  



 




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