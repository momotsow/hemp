import React from 'react'

function Address ({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Postal Address..."
        value={formData.postalAddress1}
        onChange={(event) =>
          setFormData({ ...formData, postalAddress1: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Surburb..."
        value={formData.surburb1}
        onChange={(event) =>
          setFormData({ ...formData, surburb1: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Town..."
        value={formData.town1}
        onChange={(event) =>
          setFormData({ ...formData, town1: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Postal Code..."
        value={formData.postalCode1}
        onChange={(event) =>
          setFormData({ ...formData, postalCode1: event.target.value })
        }
      />
      <input
      type="text"
      placeholder="Postal Address..."
      value={formData.postalAddress}
      onChange={(event) =>
        setFormData({ ...formData, postalAddress: event.target.value })
      }
      />
      <input
      type="text"
      placeholder="Surburb..."
      value={formData.surburb}
      onChange={(event) =>
        setFormData({ ...formData, surburb: event.target.value })
      }
      />
      <input
      type="text"
      placeholder="Town..."
      value={formData.town}
      onChange={(event) =>
        setFormData({ ...formData, town: event.target.value })
      }
      />
      <input
      type="text"
      placeholder="Postal Code..."
      value={formData.postalCode}
      onChange={(event) =>
        setFormData({ ...formData, postalCode: event.target.value })
      }
      />
</div>
  );
}

export default Address