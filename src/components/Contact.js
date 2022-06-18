import React from 'react'

function Contact ({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Tel No..."
        value={formData.telNo}
        onChange={(event) =>
          setFormData({ ...formData, telNo: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Cell No..."
        value={formData.cellNo}
        onChange={(event) =>
          setFormData({ ...formData, cellNo: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Website..."
        value={formData.website}
        onChange={(event) =>
          setFormData({ ...formData, website: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="FAX No..."
        value={formData.faxno}
        onChange={(event) =>
          setFormData({ ...formData, faxno: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="VAT No..."
        value={formData.vatno}
        onChange={(event) =>
          setFormData({ ...formData, vatno: event.target.value })
        }
      />
    </div>
  );
}

export default Contact