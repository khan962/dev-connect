import React from "react";
import "./Name.css";

const functionOne = () => {
  let x = 10;
  let y = 10;
  return x + y;
};
const square = (number) => {
  return number * number;
};

const fName = "Aftabuzzaman";
const lName = "Khan";

const Name = () => {
  return (
    <>
      <h1>My Name is {`${fName} ${lName}`}</h1>
      <h1>
        Function one Summation Result: <span>{functionOne()}</span>
      </h1>
      <h1>
        Function two Square Result: <span>{square(4)}</span>
      </h1>
    </>
  );
};

export default Name;
