import React from 'react';

const Photos = (props) => (
  <div className = 'photos'>
    <img className= 'reviewPhoto' alt = "first travel photo" src= {props.photo1}></img>
    <img className= 'reviewPhoto' alt = "second travel photo" src= {props.photo2} ></img>
    <img className= 'reviewPhoto' alt = "third travel photo" src={props.photo3} ></img>
  </div>
);



export default Photos;