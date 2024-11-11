import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { restApi } from './components/api'
import './App.css'
import Cards from './components/cards';

function App() {
  const  [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      const data = await restApi();
      console.log("Datos obtenidos de la API:", data);
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Cards characters={characters} />
    </>
  )
}

export default App
