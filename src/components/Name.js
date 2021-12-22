import React from "react";

const functionOne = () => {
  let x = 10;
  let y = 10;
  return x + y;
};

const fName = "Aftabuzzaman";
const lName = "Khan";

const Name = () => {
  return (
    <>
      <h3>My Name is {`${fName} ${lName}`}</h3>
      <h1>Function Result: {functionOne()}</h1>
    </>
  );
};

export default Name;
