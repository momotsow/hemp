import React from 'react'

function Documents ({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="file"
        placeholder="Upload DAFF Registration Certificate..."
        value={formData.daff}
        onChange={(event) =>
          setFormData({ ...formData, daff: event.target.value })
        }
      />
      <input
        type="file"
        placeholder="Upload company CIPC..."
        value={formData.cipc}
        onChange={(event) =>
          setFormData({ ...formData, cipc: event.target.value })
        }
      />
      
    </div>
  );
}

export default Documents