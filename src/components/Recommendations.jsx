import React from "react";

function Recommendations({ recommendations }) {
  return (
    recommendations.length > 0 && (
      <div style={{ marginTop: "20px" }}>
        <h3>Recommended Skills:</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    )
  );
}

export default Recommendations;
