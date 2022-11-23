import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(dog => (dog.name === name));
    return (
        dog && <div>
            <h1>{dog.name}</h1>
            <h3>Age {dog.age}</h3>
            <ul>
                {dog.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;