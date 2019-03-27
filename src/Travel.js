import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt={country} />

        <figcaption>
            <blockquote>{destination} </blockquote>
            <h1>{country}</h1>
            <h2>{distance}</h2>


        </figcaption>
    </figure>
);

export default Travel;