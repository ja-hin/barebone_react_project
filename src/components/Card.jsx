import React from "react";

const Card = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "250px",
        borderRadius: "10px",
        border: '1px solid black',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>{data?.amount}</h3>
      <h5>{data?.title}</h5>
    </div>
    
  );
};

export default Card;
