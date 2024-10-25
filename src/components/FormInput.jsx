import React from 'react';

function FormInput({ label, name, value, handleInputChange }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}:</label><br />
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
      />
    </div>
  );
}

export default FormInput;
