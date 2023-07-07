import React from "react";

const Card = ({ data }) => {
  return (
    <div
      style={{
        width: "250px",
        borderRadius: "10px",
        border: '1px solid black',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:data?.color,
      }}
    >
      <h3>{data?.amount}</h3>
      <h5>{data?.title}</h5>
    </div>
    
  );
};

export default Card;
