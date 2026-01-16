import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react";

function App() {

  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data,setData]=useState('Loading Data')


  useEffect(() =>{
    async function fetchData()
    {

    const url = "/NEH2020sGrant_Short.json";
    const response = await fetch(url);

    if (response.ok) 
      {
        const result = await response.json();
        console.log(result)

        setData(result.data);
    
      }

      return({data})
    }
    fetchData()


  },[]);

// YES YOU HAVE YOUR EMPTY ARRAY, TORI

  return (
    
    
    <div className="App">
      fetchData();
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> HEY THIS IS THE BIT YOU EDIT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
