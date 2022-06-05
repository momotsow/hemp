import React from 'react'

function CompanyDetails ({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Company Name..."
        value={formData.companyName}
        onChange={(e) => {
          setFormData({ ...formData, companyName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Full Name of CEO..."
        value={formData.ceoName}
        onChange={(e) => {
          setFormData({ ...formData, ceoName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Contact Person..."
        value={formData.contactPerson}
        onChange={(e) => {
          setFormData({ ...formData, contactPerson: e.target.value });
        }}
      />
    </div>
  );
}

export default CompanyDetails