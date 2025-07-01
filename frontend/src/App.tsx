import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const baseUrl = "/api"
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`${baseUrl}/example`)
      .then((response) => response.json())
      .then((json) => setData(json.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data}</h1>
    </>
  )
}

export default App
