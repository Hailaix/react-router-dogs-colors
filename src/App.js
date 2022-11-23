import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Color from './Color';
import ColorForm from './ColorForm';
import Colors from './Colors';
import DogDetails from './DogDetails';
import DogList from './DogList';
import NavBar from './Navbar';


function App({ dogs }) {
  const [colors, setColors] = useState([
    { name: 'red', color: 'red' },
    { name: 'blue', color: 'blue' },
    { name: 'green', color: 'green' }
  ]);

  const addColor = (name, color) => {
    setColors([...colors, { name, color }]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/dogs' element={<DogList dogs={dogs} />} />
          <Route path='/dogs/:name' element={<DogDetails dogs={dogs} />} />
          <Route path='/colors' element={<Colors colors={colors} />} />
          <Route path='/colors/:colorName' element={<Color colors={colors} />} />
          <Route path='/colors/new' element={<ColorForm addColor={addColor} />} />
          <Route path='*' element={<Navigate to='/dogs' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      id: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      id: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      id: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      id: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
