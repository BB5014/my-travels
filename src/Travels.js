import React from "react";
import App from "./App.js";

import Travel from './Travel';

const travels = [
    {


        destination:"Praslin",
        country:"Seychelles",
        photo:"https://images.national-tours.fr/(Image)-image-Seychelles-Source-argent-191-fo_32125672-09032017.jpg",
        distance:"7 500 km"
    },

    {
        destination:"Bora Bora",
        country:"Tahiti Nui",
        photo:"http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2018/07/bora-bora.jpg",
        distance:"10 000 km"
    },
    {
        destination:"Male",
        country:"Maldives",
        photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsIJLXhC4yRPgMZf8frheMuCXcJzvg7iJlfbzApgtqx6pJ3i1tQ",
        distance:"8 000 km"
    },
    {
        destination:"Yucatan",
        country:"Mexique",
        photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNethnDGVponCog1hr9sAsf3b4qrE3WARFQ4jIOBosviWDeNtr_Q",
        distance:"6 000 km"
    },

    {
        destination:"Samanaa",
        country:"Republique Dominicaine",
        photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsIJLXhC4yRPgMZf8frheMuCXcJzvg7iJlfbzApgtqx6pJ3i1tQ",
        distance:"7 000 km"
    }

];


const Travels = () => (
    <div>
     {travels.map((travel, id) => 
        <Travel {...travel} key ={id}/>
    )}
    </div>
  );



  export default Travels;
