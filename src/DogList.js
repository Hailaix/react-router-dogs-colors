import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div className="doglist">
            {dogs.map(dog => (
                <Link to={`/dogs/${dog.name}`} key={dog.id}>{dog.name}</Link>
            ))}
        </div>
    );
}

export default DogList;