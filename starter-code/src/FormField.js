import React, { Component } from "react";
import "./FormField.css";

function FormField({ placeholder, label, input, coolButton }) {
  return (
    <section className="form-field">
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={input} placeholder={placeholder} />
        </div>
      </div>
      <a className="button is-danger is-rounded display">Button2</a>
      <a className={coolButton}> button 1 </a>
    </section>
  );
}

export default FormField;
