import React, { useState } from "react";
import CompanyDetails from './CompanyDetails'
import Address from './Address'
import Authorisation from './Authorisation'
import Contact from './Contact'
import Documents from './Documents'
import OfficeOnly from './OfficeOnly'
import Success from './Success'

function ApplicationForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other", "contact", "Document", "Office Only", "Success"];

  const PageDisplay = () => {
    if (page === 0) {
      return <CompanyDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Contact formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Authorisation formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Documents formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <OfficeOnly formData={formData} setFormData={setFormData} />;
    } else {
      return <Success formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
