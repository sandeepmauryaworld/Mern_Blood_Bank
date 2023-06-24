import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hospital, setHospital] = useState("");
  return (
    <form
      onSubmit={(e) => {
        if (formType === "login") return handleLogin(e, email, password, role);
        else if (formType === "register")
          return handleRegister(
            e,
            email,
            password,
            phone,
            website,
            name,
            role,
            organisationName,
            address,
            hospital
          );
      }}
    >
      <h1>{formTitle}</h1>
      <hr />

      <div className="d-flex mb-3">
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"donar"}
            onChange={(e) => setRole(e.target.value)}
            defaultChecked
            id="donarRadio"
          />
          <label htmlFor="donarRadio" className="form-check-lable">
            Donar
          </label>
        </div>
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"admin"}
            onChange={(e) => setRole(e.target.value)}
            id="adminRadio"
          />
          <label htmlFor="adminRadio" className="form-check-lable">
            Admin
          </label>
        </div>
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"hospital"}
            onChange={(e) => setRole(e.target.value)}
            id="hospitalRadio"
          />
          <label htmlFor="hospitalRadio" className="form-check-lable">
            Hospital
          </label>
        </div>{" "}
        <div className="form-check ms-2">
          <input
            type="radio"
            className="form-check-input"
            name="role"
            value={"organisationName"}
            onChange={(e) => setRole(e.target.value)}
            id="oraganisationRadio"
          />
          <label htmlFor="oraganisationRadio" className="form-check-lable">
            Oraganisation
          </label>
        </div>
      </div>

      {/* switch statement */}

      {(() => {
        /* eslint-disable-next-line*/

        switch (true) {
          case formType === "login": {
            return (
              <>
                <InputType
                  lableText={"Email"}
                  lableFor={"foremail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  lableFor={"forpassword"}
                  lableText={"password"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </>
            );
          }
          case formType === "register": {
            return (
              <>
                {(role === "admin" || role === "donar") && (
                  <InputType
                    lableText={"Name"}
                    lableFor={"forname"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                {role === "organisationName" && (
                  <InputType
                    lableText={"Organisation Name"}
                    lableFor={"fororganisationName"}
                    inputType={"organisationName"}
                    name={"text"}
                    value={organisationName}
                    onChange={(e) => {
                      setOrganisationName(e.target.value);
                    }}
                  />
                )}

                {role === "hospital" && (
                  <InputType
                    lableText={"Hospital Name"}
                    lableFor={"forhospitalname"}
                    inputType={"hospitalname"}
                    name={"text"}
                    value={hospital}
                    onChange={(e) => {
                      setHospital(e.target.value);
                    }}
                  />
                )}

                <InputType
                  lableText={"Email"}
                  lableFor={"foremail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  lableFor={"forpassword"}
                  lableText={"password"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <InputType
                  lableText={"Website"}
                  lableFor={"forwebsite"}
                  inputType={"website"}
                  name={"website"}
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
                <InputType
                  lableText={"Address"}
                  lableFor={"foraddress"}
                  inputType={"address"}
                  name={"address"}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <InputType
                  lableText={"Phone"}
                  lableFor={"forphone"}
                  inputType={"phone"}
                  name={"phone"}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </>
            );
          }
        }
      })()}

      <div className="d-flex  justify-content-between">
        {formType === "login" ? (
          <>
            <p>
              Not Register Yet? Register now
              <Link to="/register"> Here !</Link>
            </p>
          </>
        ) : (
          <p>
            Already User
            <Link to={"/login"}>Login</Link>
          </p>
        )}
        <button className="btn btn-primary" type="submit">
          {submitBtn}{" "}
        </button>
      </div>
    </form>
  );
};

export default Form;
