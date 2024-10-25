import React from 'react';

function RecommendButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      Recommend
    </button>
  );
}

export default RecommendButton;
