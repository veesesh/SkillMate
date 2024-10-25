import React from "react";

function Recommendations({ recommendations }) {
  const containerStyle = {
    marginTop: "24px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#09090b",
    border: "1px solid #27272a",
    color: "#fafafa",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const headerStyle = {
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#fafafa",
    margin: "0",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const listItemStyle = {
    padding: "12px 16px",
    borderRadius: "8px",
    backgroundColor: "#18181b",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    flexShrink: "0",
  };

  const textStyle = {
    flex: "1",
    fontSize: "16px",
    color: "#e4e4e7",
  };

  const badgeStyle = {
    padding: "4px 12px",
    fontSize: "12px",
    fontWeight: "500",
    backgroundColor: "#27272a",
    color: "#a1a1aa",
    borderRadius: "16px",
    letterSpacing: "0.025em",
  };

  const getHoverStyle = (baseStyle) => ({
    ...baseStyle,
    backgroundColor: "#27272a",
  });

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  if (!recommendations?.length) return null;

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>Recommended Skills</h3>
      </div>
      <ul style={listStyle}>
        {recommendations.map((rec, index) => (
          <li
            key={index}
            style={
              hoveredIndex === index
                ? getHoverStyle(listItemStyle)
                : listItemStyle
            }
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span style={dotStyle} />
            <span style={textStyle}>{rec}</span>
            <span style={badgeStyle}>Recommended</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
